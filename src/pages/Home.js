function Home() {
  return (
    <div className="col border d-flex flex-column align-items-center">
      <div className="row fs-2 mt-4">愚公移山</div>
      <div className="row p-4">
        愚公臨死前召集兒子來到床邊虛弱的說：\n\n「移山…移山………」\n\n兒子：「亮晶晶？」\n\n愚公卒。
      </div>
      <div className="row">作者: 佐助</div>
      <div className="row">
        <button type="button" className="btn btn-outline-primary btn-sm mt-4 ">
          下一則
        </button>
      </div>
      <div className="row">評分</div>
      <div className="row">
        <div className="col border mb-4">
          <table className="table table-borderless">
            <tbody>
              <tr>
                <th scope="row">小櫻</th>
                <td>佐助好帥</td>
              </tr>
              <tr>
                <th scope="row">小櫻</th>
                <td>佐助好帥</td>
              </tr>
              <tr>
                <th scope="row">小櫻</th>
                <td>佐助好帥</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
