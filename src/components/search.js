import React, { Component } from 'react';
class search extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <form onSubmit={this.props.find}>
                    <input type="text" className="search" onChange={this.props.changeSearch} placeholder="Search" />
                    <input type="submit" className="submit" value="Go!" />
                </form>
            </div>
         );
    }
}
 
export default search;