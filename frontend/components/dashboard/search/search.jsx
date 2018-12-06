import React from 'react';


class Search extends React.Component {

  constructor(props) {
    super(props);

    this.state = { searchTerm: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    return (e) => {
      this.setState({ searchTerm: e.target.value });
    };
  }


  render (){
    let result;
    if(this.state.searchTerm){

    } else {
      result = (
        <div className='search-content --empty'>
          <h1 className='search-title'>Search Melofy</h1>
          <p className='search-subtitle'>Find your favorite songs, artists, albums, podcasts and playlists.</p>
        </div>
      );
    }

    return (
      <div className='collection-main-view'>
        <div className='search-input-container'>
          <div className='content-spacing'>
            <input type='text' onChange={this.handleChange()} className='search-input' placeholder='Start typing...' value={this.state.searchTerm}/>
          </div>
        </div>
        {result}
      </div>
    );
  }
}

export default Search;
