import './app-info.css'
function AppInfo({data}) {
  return (
    <div className="app-info">
      <h1>Учет сотрудников</h1>
      <h2>Общее число сотрудников: {data.length}</h2>
      <h2>Получат премию: {data.filter(item=> item.increase).length} </h2>
    </div>
  );
}

export default AppInfo;