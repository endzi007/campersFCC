import React from 'react';
import $ from "jquery";

class Table extends React.Component{
    constructor(){
        super();
        this.state={
            recent: "dd",
            allTime: "loading.."
        }
        this.columns = "";
    }
    componentWillMount(){
        this.setState({
            recent: this.props.data.recent,
            allTime: this.props.data.allTime,
            display: "recent"
        });
    }

    makeTable(arg){
        var columns = [];
        var display = this.state[arg];
        for (var x in display){
          columns.push(
            <tr key={"row"+x}>
              <td className="tableCell numCol" key={x}>{Number.parseInt(x)+1}</td>
              <td className="tableCell picCol" key={"pic"+x}><img src={display[x].img}/></td>
              <td className="tableCell userCol" key={"user"+x}><a href={"https://www.freecodecamp.org/"+display[x].username} target="_blank"> {display[x].username} </a></td>
              <td className="tableCell recCol" key={"rec"+x}> {display[x].recent} </td>
              <td className="tableCell yearcol" key={"all"+x}> {display[x].alltime} </td>
          </tr>);
        }
        return columns;
    }
    componentDidMount(){
        //this.setState= ({columns: this.makeTable()})
      }
    handleClick(e){
        let clickedId = e.target.id;
        $(".headerCell").removeClass("active");
        $("#"+clickedId).addClass("active");
        if(clickedId === "recent"){
            console.log(e.target);
            this.setState({
                display: "recent"
            });
        } else {
            this.setState({
                display: "allTime"
            });
        }
    }

    render() {
        console.log(this.columns);
        return (
<div className="tableContainer">
            <table>
                <thead>
                    <tr>
                    <th className="headerCell numCol" id="autoNumber">Num</th>
                    <th className="headerCell picCol" id="userPicture">Picture</th>
                    <th className="headerCell userCol" id="userName">UserName</th>
                    <th className="headerCell recCol active" id="recent" onClick={this.handleClick.bind(this)}>last 30 days</th>
                    <th className="headerCell yearcol" id="lastYear" onClick={this.handleClick.bind(this)}>last year</th>
                </tr>
                </thead>
              <tbody>
                {this.makeTable(this.state.display)}
              </tbody>

              </table>
          </div>
        );
    }
}

export default Table;