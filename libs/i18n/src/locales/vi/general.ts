export const general = {
  business: {
    brand: 'SuperLink',
    sub_title: 'Công cụ quản lý link affiliate sản phẩm.',
    setting: 'Cài đặt',
  },
  button: {
    submit: 'Xác nhận',
    save: 'Lưu',
    cancel: 'Hủy',
    delete: 'Xóa',
    upload: 'Tải lên',
    undo: 'Khôi phục',
    leave_page: 'Rời khỏi trang',
  },
  form_item: {
    placeholder: 'Vui lòng nhập',
  },
  message: {
    success: '{{target}} thành công',
  },
  tooltip: {
    drag_drop: 'Ấn giữ để kéo thả',
  },
  checkbox: {
    check_all: 'Chọn tất cả',
    uncheck_all: 'Bỏ chọn tất cả',
  },
  typography: {
    unsaved_leave: 'Chỉnh sửa chưa được lưu',
    unsaved_leave_remind:
      'Nếu bạn thoát ra khỏi trang này thì chỉnh sửa nội dung chưa lưu sẽ bị mất.',
  },
  tag: {
    coming_soon: 'Sắp ra mắt',
  },
  empty: {
    search_result: 'Không tìm thấy kết quả',
  },
  error: {
    form_item: {
      required: '{{item}} là thông tin bắt buộc.',
      out_of_length: '{{item}} phải có độ dài từ {{min}} đến {{max}} kí tự.',
      out_of_range: '{{item}} phải có giá trị từ {{min}} đến {{max}}.',
    },
    connect_failed: 'Lỗi kết nối.',
    first_out_of_range:
      "Tham số 'first' phải trong khoảng từ {{min}} đến {{max}}.",
    offset_lower_than_min: "Tham số 'offset' phải lớn hơn {{min}}.",
    invalid_param: "Tham số '{{param}}' không hợp lệ.",
    not_have_permission: 'Bạn không có quyền thực hiện thao tác này.',
  },
};

export type GeneralResources = typeof general;
