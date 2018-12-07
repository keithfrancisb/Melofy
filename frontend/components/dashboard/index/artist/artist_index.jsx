import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ArtistItem from './artist_item';
import { fetchArtists } from '../../../../actions/artist_actions';


class ArtistIndex extends React.Component {

  componentDidMount(){
    this.props.fetchArtists();
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
    fetchArtists: () => dispatch(fetchArtists())
  };
};

export default connect(msp,mdp)(ArtistIndex);
