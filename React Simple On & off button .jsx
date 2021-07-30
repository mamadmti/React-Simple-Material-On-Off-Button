import React, { Component } from 'react';


class SwitchButton extends Component {
    state = { 
        CurrentBut:1
    }
    componentDidMount() {
       if (this.props!==null)
       {
           var data = this.props;
           this.setState({data});
       }
    }
    onClick(id){
        this.setState({CurrentBut:id})
        this.props.CurrentBut(id)
    }
    render() { 
       var data = this.props.data
       var CurrentBut = this.state.CurrentBut
        return ( 
            <React.Fragment>     
                <div className="col-12 justify-content-center row no-gutters mt-3 mb-3 Clickable " >    
                 { data.map(a=>(
                    <div className="text-center but-nav-div " onClick={()=>this.onClick(a.id)} > 
                            <p className={"but-nav" + (a.id===CurrentBut? " sel-but-nav " : "") } >{a.name}</p>
                    </div> )   ) }</div>

                </React.Fragment>

          
         );
    }
}
 
export default SwitchButton;