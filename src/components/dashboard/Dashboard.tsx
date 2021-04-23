import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import DashboardHeader from 'components/fragments/DashboardHeader';

import 'styles/dashboard.css';
import { CoordinatesContentType } from 'types/CoordinatesType';

export interface DispatchProps {
  getInitialCoordinates: Function;
  getNextGeneration: Function;
}

export interface StateProps {
  coordData: CoordinatesContentType;
}

export interface State {
  generationNb: number;
  inputText: String;
  autoplay: boolean;
}

type Props = {} & DispatchProps & StateProps & RouteComponentProps;

class Dashboard extends Component<Props, State> {
  intervalID: any;
  constructor(props: Props) {
    super(props);
    this.state = {
      generationNb: 0,
      inputText: '',
      autoplay: false,
    };
    this.intervalID = 0;
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      200
    );
  }

  tick() {
    const { autoplay, generationNb } = this.state;
    const { getNextGeneration } = this.props;

    if (autoplay && generationNb < 94) {
      getNextGeneration();
      this.setState({ generationNb: generationNb + 1 });
    }
  }

  generateMap = () => {
    const { coordData } = this.props;

    return coordData.coordinates.map((cell, index) => {
      if (index % coordData.mapLength === 0) {
        if (cell === true) {
          return (
            <>
              <br/>
              <div className="DashboardMapCase" key={index}>
              </div>
            </>
          );
        } else {
          return (
            <>
              <br/>
              <div className="DashboardMapCaseFalse" key={index}>
              </div>
            </>
          );
      }
    }
      if (cell === true) {
        return (
          <div className="DashboardMapCase" key={index}>
          </div>
        );
      } else {
        return (
          <div className="DashboardMapCaseFalse" key={index}>
          </div>
        );
      }
    })
    
  }

  showFile = async (e : any) => {
    const { getInitialCoordinates } = this.props;

    e.preventDefault();

    const reader = new FileReader();

    reader.onload = async (e) => {
      if (e.target) {
        const text = (e.target.result)
        if (text) {
          getInitialCoordinates(String(text));
        }
      }
    }
    reader.readAsText(e.target.files[0]);
  }

  newGeneration = () => {
    const { getNextGeneration } = this.props;
    const { generationNb } = this.state;

    getNextGeneration();
    this.setState({ generationNb: generationNb + 1 });
  }

  autoPlay = () => {
    const { autoplay } = this.state;

    this.setState({ autoplay: !autoplay });
  }

  render() {
    const { generationNb } = this.state;
    const { coordData } = this.props;

    return (
      <div>
        <DashboardHeader />
        <div className="DashboardContainer">
          <div className="DashboardButtonBarContainer">
            <a href={`data:text,${coordData.dataBrut}`} download="export.txt">
              <button className="DashboardButton" onClick={() => {}}>Exporter</button>
            </a>
            <button className="DashboardButton" onClick={() => {this.newGeneration()}}>Prochaine génération</button>
            <button className="DashboardButton" onClick={() => {this.autoPlay()}} >Auto Play</button>
            <input className="DashboardButton" type='file' onChange={this.showFile} />
          </div>
          <div className="DashboardGeneration">
            <p>Génération numéro: {generationNb}</p>
          </div>
          <div className="DashboardMapContainer">
            {this.generateMap()}
          </div>
          
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);