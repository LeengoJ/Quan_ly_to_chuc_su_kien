import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons'
import { ActionType, ProColumns } from '@ant-design/pro-components'
import { Button, Popconfirm, Space, message, notification } from 'antd'
import { useState, useRef } from 'react'
import dayjs from 'dayjs'
import DataTable from 'src/@core/components/data-table'
import { useAppDispatch, useAppSelector } from 'src/redux/hook'
import { IPermission } from 'src/types/interface-data'
import { colorMethod } from 'src/configs/utils'
import { callDeletePermission } from 'src/types/apis.axios'
import Access from 'src/@core/layouts/components/share/access'
import { ALL_PERMISSIONS } from 'src/configs/permistions'
// import { ALL_PERMISSIONS } from '@/config/permissions'

const PermissionPage = () => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [dataInit, setDataInit] = useState<IPermission | null>(null)
  const [openViewDetail, setOpenViewDetail] = useState<boolean>(false)

  const tableRef = useRef<ActionType>()

  // const isFetching = useAppSelector(state => state.permission.isFetching)
  // const meta = useAppSelector(state => state.permission.meta)
  // const permissions = useAppSelector(state => state.permission.result)
  const dispatch = useAppDispatch()

  const handleDeletePermission = async (_id: string | undefined) => {
    if (_id) {
      const res = await callDeletePermission(_id)
      if (res && res.data) {
        message.success('Xóa Permission thành công')
        reloadTable()
      } else {
        notification.error({
          message: 'Có lỗi xảy ra',
          description: res.message
        })
      }
    }
  }

  const reloadTable = () => {
    tableRef?.current?.reload()
  }

  const columns: ProColumns<IPermission>[] = [
    {
      title: 'Id',
      dataIndex: '_id',
      width: 250,
      render: (text: any, record: any, index: any, action: any) => {
        return (
          <a
            href='#'
            onClick={() => {
              setOpenViewDetail(true)
              setDataInit(record)
            }}
          >
            {record._id}
          </a>
        )
      },
      hideInSearch: true
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true
    },
    {
      title: 'API',
      dataIndex: 'apiPath',
      sorter: true
    },
    {
      title: 'Method',
      dataIndex: 'method',
      sorter: true,
      render(dom: any, entity: any, index: any, action: any, schema: any) {
        return (
          <p
            style={{
              paddingLeft: 10,
              fontWeight: 'bold',
              marginBottom: 0,
              color: colorMethod(entity?.method as string)
            }}
          >
            {entity?.method || ''}
          </p>
        )
      }
    },
    {
      title: 'Module',
      dataIndex: 'module',
      sorter: true
    },
    {
      title: 'CreatedAt',
      dataIndex: 'createdAt',
      width: 200,
      sorter: true,
      render: (text: any, record: any, index: any, action: any) => {
        return <>{dayjs(record.createdAt).format('DD-MM-YYYY HH:mm:ss')}</>
      },
      hideInSearch: true
    },
    {
      title: 'UpdatedAt',
      dataIndex: 'updatedAt',
      width: 200,
      sorter: true,
      render: (text: any, record: any, index: any, action: any) => {
        return <>{dayjs(record.updatedAt).format('DD-MM-YYYY HH:mm:ss')}</>
      },
      hideInSearch: true
    },
    {
      title: 'Actions',
      hideInSearch: true,
      width: 50,
      render: (_value: any, entity: any, _index: any, _action: any) => (
        <Space>
          <Access permission={ALL_PERMISSIONS.PERMISSIONS.UPDATE} hideChildren>
            <EditOutlined
              style={{
                fontSize: 20,
                color: '#ffa500'
              }}
              type=''
              onClick={() => {
                setOpenModal(true)
                setDataInit(entity)
              }}
              rev={undefined}
            />
          </Access>
          <Access permission={ALL_PERMISSIONS.PERMISSIONS.DELETE} hideChildren>
            <Popconfirm
              placement='leftTop'
              title={'Xác nhận xóa permission'}
              description={'Bạn có chắc chắn muốn xóa permission này ?'}
              onConfirm={() => handleDeletePermission(entity._id)}
              okText='Xác nhận'
              cancelText='Hủy'
            >
              <span style={{ cursor: 'pointer', margin: '0 10px' }}>
                <DeleteOutlined
                  style={{
                    fontSize: 20,
                    color: '#ff4d4f'
                  }}
                  rev={undefined}
                />
              </span>
            </Popconfirm>
          </Access>
        </Space>
      )
    }
  ]

  // const buildQuery = (params: any, sort: any, filter: any) => {
  //   const clone = { ...params }
  //   if (clone.name) clone.name = `/${clone.name}/i`
  //   if (clone.apiPath) clone.apiPath = `/${clone.apiPath}/i`
  //   if (clone.method) clone.method = `/${clone.method}/i`
  //   if (clone.module) clone.module = `/${clone.module}/i`

  //   let temp = queryString.stringify(clone)

  //   let sortBy = ''
  //   if (sort && sort.name) {
  //     sortBy = sort.name === 'ascend' ? 'sort=name' : 'sort=-name'
  //   }
  //   if (sort && sort.apiPath) {
  //     sortBy = sort.apiPath === 'ascend' ? 'sort=apiPath' : 'sort=-apiPath'
  //   }
  //   if (sort && sort.method) {
  //     sortBy = sort.method === 'ascend' ? 'sort=method' : 'sort=-method'
  //   }
  //   if (sort && sort.module) {
  //     sortBy = sort.module === 'ascend' ? 'sort=module' : 'sort=-module'
  //   }
  //   if (sort && sort.createdAt) {
  //     sortBy = sort.createdAt === 'ascend' ? 'sort=createdAt' : 'sort=-createdAt'
  //   }
  //   if (sort && sort.updatedAt) {
  //     sortBy = sort.updatedAt === 'ascend' ? 'sort=updatedAt' : 'sort=-updatedAt'
  //   }

  //   //mặc định sort theo updatedAt
  //   if (Object.keys(sortBy).length === 0) {
  //     temp = `${temp}&sort=-updatedAt`
  //   } else {
  //     temp = `${temp}&${sortBy}`
  //   }

  //   return temp
  // }

  return (
    <div>
      <Access permission={ALL_PERMISSIONS.PERMISSIONS.GET_PAGINATE}>
        <DataTable<IPermission>
          actionRef={tableRef}
          headerTitle='Danh sách Permissions (Quyền Hạn)'
          rowKey='_id'
          columns={columns}
          request={async (params, sort, filter): Promise<any> => {
            // const query = buildQuery(params, sort, filter)
            // dispatch(Permission({ query }))
          }}
          scroll={{ x: true }}
          pagination={{
            // current: meta.current,
            // pageSize: meta.pageSize,
            // showSizeChanger: true,
            // total: meta.total,
            showTotal: (total, range) => {
              return (
                <div>
                  {' '}
                  {range[0]}-{range[1]} trên {total} rows
                </div>
              )
            }
          }}
          rowSelection={false}
          toolBarRender={(_action, _rows): any => {
            return (
              <Button type='primary' onClick={() => setOpenModal(true)}>
                Thêm mới
              </Button>
            )
          }}
        />
      </Access>
    </div>
  )
}

export default PermissionPage
