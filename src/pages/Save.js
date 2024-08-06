function Save() {
  return (
    <div className="col border d-flex flex-column align-items-center">
      <div className="row fs-2 mt-4">已收藏笑話</div>
      <div className="row">
        <div className="col border my-4">
          <table className="table table-borderless align-middle">
            <tbody>
              <tr>
                <th scope="row">笑話</th>
                <td>分數</td>
                <td>
                  <button type="button" class="btn btn-outline-primary">
                    Primary
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">笑話</th>
                <td>分數</td>
                <td>
                  <button type="button" class="btn btn-outline-primary">
                    Primary
                  </button>
                </td>
              </tr>
              <tr>
                <th scope="row">笑話</th>
                <td>分數</td>
                <td>
                  <button type="button" class="btn btn-outline-primary">
                    Primary
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Save;
