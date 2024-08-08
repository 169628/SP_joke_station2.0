function Create() {
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
              標題
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
              內容
            </th>
            <td>
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea2"
                  style={{ height: "100px" }}
                ></textarea>
                <label htmlFor="floatingTextarea2">ex:有一天~~</label>
              </div>
            </td>
          </tr>
          <tr>
            <td
              colSpan="2"
              className="text-center
            "
            >
              <button type="button" className="btn btn-outline-primary">
                新增文章
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Create;
