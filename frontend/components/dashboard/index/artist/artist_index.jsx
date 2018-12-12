import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ArtistItem from './artist_item';
import { fetchArtists } from '../../../../actions/artist_actions';


class ArtistIndex extends React.Component {

  componentDidMount(){
    const { searchTerm, artistIds } = this.props;
    this.props.fetchArtists(searchTerm, artistIds);
  }

  componentDidUpdate(prevProps) {
    if(prevProps.searchTerm != this.props.searchTerm)
      this.props.fetchArtists(this.props.searchTerm);
  }

  render() {
    const artists = this.props.artists.map((artist) => {
      return (
        <ArtistItem key={artist.id} artist={artist} />
      );
    });
    return (
      <div>
        <ul className='playlist-list'>
          {artists}
        </ul>
      </div>
    );
  }
}

const msp = ({entities}) => {
  const { artists } = entities;
  return {
    artists: Object.values(artists)
  };
};

const mdp = dispatch => {
  return {
    fetchArtists: (searchTerm, artist_ids) => dispatch(fetchArtists(searchTerm, artist_ids))
  };
};

export default connect(msp,mdp)(ArtistIndex);
