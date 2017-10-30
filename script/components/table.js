import React from 'react';

class Table extends React.Component{
    constructor(){
        super();
        this.state={
            display: "dd",
            columns: "loading.."
        }
        this.columns = "";
    }
    componentWillMount(){
        this.setState({
            display: this.props.data.recent
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
                    <th className="headerCell recCol" id="recent" >last 30 days</th>
                    <th className="headerCell yearcol" id="lastYear" >last year</th>
                </tr>
                </thead>
              <tbody>
                {this.makeTable("display")}
              </tbody>

              </table>
          </div>
        );
    }
}

export default Table;