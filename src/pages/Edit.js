function Edit() {
  return (
    <div className="col border d-flex flex-column align-items-center">
      <table className="table table-borderless my-4">
        <tbody>
          <tr>
            <th
              scope="row"
              className="text-center
            "
            >
              暱稱
            </th>
            <td>
              <input
                className="form-control"
                type="text"
                placeholder="ex:我是一隻魚"
                aria-label="輸入標題的地方"
              />
            </td>
          </tr>
          <tr>
            <th
              scope="row"
              className="text-center
            "
            >
              關於我
            </th>
            <td>
              <input
                className="form-control"
                type="text"
                placeholder="ex:我是一隻魚"
                aria-label="輸入標題的地方"
              />
              <span className="form-text text-primary">
                密碼至少6個字，只能使用英文大小寫、數字、與符號: !@#&%_
              </span>
            </td>
          </tr>

          <tr>
            <td
              colSpan="2"
              className="text-center
            "
            >
              <button type="button" className="btn btn-outline-primary">
                更新會員資訊
              </button>
            </td>
          </tr>
          <tr>
            <td
              colSpan="2"
              className="text-center
            "
            >
              <button type="button" className="btn btn-danger">
                刪除此帳號
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Edit;
