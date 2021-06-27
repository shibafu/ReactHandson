import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  data = [
    "This is list sample.",
    "コレはリストのサンプルです",
    "配列をリストに変換します"
  ]

  area = {
    width:"500px",
    height:"500px",
    border:"1px solid blue"
  }
  // コンストラクタ
  constructor(props){
    super(props)
    this.state = {
      list:this.area
    }
  }

  // ボタンイベント
  render(){
    return <div>
    <h1 className="bg-primary text-white display-4">React</h1>
      <div classMame="container">
        <p className="subtitle">Show List</p>
        <List title="サンプル・リスト" data={this.data} />
      </div>
    </div>
  }

  class List extends Component {
    number = 1

    render(){
    let data = this.props.data;

    return (<div>
      <p className="h5 text-center">{this.props.title}</h1>
        <ul classMame="list-group-item" key={key}>
          {


          }
        </div>
      </div>
    )
    }
  }


  }
  // 表示切替
  draw(d){
    let s = {
      poisition:"absolute",
      left:(d.x - 100) + "px",
      top:(d.y - 100) + "px",
      width:"50px",
      height:"50px",
      backgroundColor:"#74992e",
      border:"1px solid #74992e"
    }
    return <div style={s}>しかく</div>
  }

  // レンダリングメソッド
  render() {
    return <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <p className="subtitle">draw reactangle.</p>
      <div style={this.area} onClick={this.doAction}>
        {this.data.map((item, value) => 
          <li>
            <item number={key + 1} value={item} />

          </li>
        this.draw(value))}
      </div>
    </div>
  }

  
}

export default App;
