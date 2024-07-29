import './style.css';

export default function MyComponents() {
  return (
    <div class="main_div" style={{ padding:'10px', textAlign: 'center', marginTop: '50px' }}>
      <div style={{ backgroundColor: 'rgb(46, 46, 160)', padding: '20px', borderRadius: '5px' }}>
        <h1 style={{ color: 'white' }}>shared-components........</h1>
        name: <input type="text" />
        email:<input type="text" />
      </div>
    </div>
  );
}
