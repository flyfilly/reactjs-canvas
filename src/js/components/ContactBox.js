import React from "react";
import SubBox from "./SubBox/SubBox";
import Title from "./Header/Title";


/**
  React Component Template with basic examples.
  Full list of lifecycle callbacks: https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods
*/
export default class ContactBox extends React.Component {

  constructor( ) {
    super( );
    console.log( "lifecycle...constructor" );
    //Modify by: this.setState( { key : newValue } );
    this.state = {
      //key value pairs of default state values
      clicked : 0,
      myList  : [ ]
    };
  }

  componentWillMount( ) { 
    console.log( "lifecycle...componentWillMount" ); 
    this._fetchMyList( );
  }

  render( ) {
    console.log( "lifecycle...render" );
    return( 
      <div>
        <Title title="My React Component" />
        
        <p className="">A simple component created: {this._getDate( )}</p>
        <ul style={{listStyleType : 'none'}}>
          {this.state.myList.map( sb => 
            <li key={sb.id.value}>
              <SubBox 
                pic={sb.picture.large}
                name={`${sb.name.title} ${sb.name.first} ${sb.name.last}`}
                email={sb.email} />
              <br/>
            </li>
          ) }
        </ul>

        <input placeholder="example Input...will log to console" ref={(input) => this._input = input} />
        <button onClick={this._handleClick.bind(this)}>clicked {this.state.clicked} {this._getClickedString( )}</button>
      </div>
    )
  }

  componentDidMount( ) {
    console.log( "lifecycle...componentDidMount" );
  }

  componentWillUnmount( ) {
    console.log( "lifecycle...componentWillUnmount" );
  }

  _getDate( ) {
    return new Date( ).toTimeString( );
  }

  _fetchMyList( ) {
    let xhr = new XMLHttpRequest( );
    
    xhr.onreadystatechange = ( ) => {

      if ( xhr.readyState == 4 && xhr.status == 200 ) {
        let json = JSON.parse( xhr.responseText );
        console.log( json.results );
        this.setState( {
          myList : json.results
        } );
      }

    };

    xhr.open( "GET", "https://randomuser.me/api/?results=10&nat=us&format=json", true );
    xhr.send( );
  }

  _handleClick( evt ) {
    evt.preventDefault( );

    console.log( this._input.value );

    this.state.clicked++;
    this.setState( {
      clicked : this.state.clicked
    } );
  }

  _getClickedString( ) {
    return ( this.state.clicked == 1 ? 'time' : 'times' );
  }
}