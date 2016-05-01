import React from "react";


export default class SubBox extends React.Component {
  constructor( ) {
    super( );
  }

  componentWillMount( ) { }
  
  render( ) {
    return( 
      <div>
        <span style={{float: 'left', marginRight : '1em'}}><img style={{'borderRadius':'50%'}} src={this.props.pic}/></span>
        <span style={{lineHeight: '60px'}}>
          <strong style={{fontSize:'300%'}}>{this.props.name}</strong><br/>
          {this.props.email}
        </span>
      </div>
    );
  }

  componentDidMount( ) { }

  componentWillUnmount( ) { }

}