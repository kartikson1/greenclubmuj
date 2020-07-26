import React from 'react';
import './about.css';

const About = () => {
  return (
    <div>
      <link rel='stylesheet' href={require('./about.css')} />
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css?family=Inconsolata'
      />
      <link
        rel='stylesheet'
        href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'
        integrity='sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u'
        crossorigin='anonymous'
      ></link>
      <div
        className='bgimg w3-display-container w3-grayscale-min'
        id='home'
        style={{
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundImage: require('./img/rgcplantation.jpg'),
          minHeight: '75%',
        }}
      >
        <div className='w3-display-bottomleft w3-center w3-padding-large w3-hide-small'>
          <span className='w3-tag' style={{ fontSize: '25px' }}>
            Rotaract Green Club, MUJ
          </span>
        </div>
        <div
          className='w3-display-middle w3-center'
          style={{ paddingTop: '100px' }}
        >
          <br />
          <br />
          <br />
          <br />
          <span
            className='w3-text-white'
            style={{ fontSize: '50px', textShadow: '2px 2px 5px #ff0000' }}
          >
            Rotarians'Corner
          </span>
        </div>
        <div className='w3-display-bottomright w3-center w3-padding-large'>
          <span className='w3-text-white' style={{ fontSize: '25px' }}>
            Manipal University Jaipur
          </span>
        </div>
      </div>
      <div className='w3-sand w3-grayscale w3-large'>
        <div className='w3-container' id='about'>
          <div className='w3-content' style={{ maxWidth: '700px' }}>
            <h5 className='w3-center w3-padding-64'>
              <span className='w3-tag w3-wide' style={{ fontSize: '28px' }}>
                About the club
              </span>
            </h5>
            <p>
              The Rotaract Green Club of MUJ was found by a, b on x/y/z. Ever
              since, it has been a one big family who takes care of the club,
              who works as a family together in many beautiful events every
              year. We are the social service club of Manipal University Jaipur,
              having adopted 5 villages around MUJ: Sanjhariya, Thikariya,
              Begas, Dehmi Kalan and Dehmi Khurd.
            </p>
            <div className='w3-panel w3-leftbar w3-light-grey'>
              <p>
                <i>It is not enough to be compassionate. You must act.</i>
              </p>
              <p>- Dalai Lama</p>
            </div>
            <img
              src={require('./img/rgccover2.jpg')}
              style={{ width: '100%', maxWidth: '1000px' }}
              className='w3-margin-top'
            />
            <br />
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              ornare, ligula sed viverra aliquam, nulla lectus congue velit, sit
              amet facilisis nisl elit porta ante. Suspendisse ligula turpis,
              fringilla vitae accumsan vitae, vehicula in nibh. Nunc placerat
              leo sit amet sagittis tristique. Nulla vitae ante ex. Nunc
              consequat, risus ullamcorper lobortis tincidunt, felis neque
              vehicula metus, ac accumsan turpis ipsum sit amet enim. In
              ullamcorper purus sapien, at faucibus nisi rutrum ullamcorper.
              Integer mollis nec est vitae tristique.
            </p>
            <p>
              Phasellus finibus, elit eget accumsan pulvinar, dolor justo ornare
              nisl, vel auctor leo felis dignissim leo. Donec massa felis,
              imperdiet quis luctus sit amet, efficitur faucibus odio. Aliquam
              erat volutpat. Nunc sagittis sed lorem nec porta. Nam ultrices
              felis lorem, vitae interdum enim rutrum nec. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Nulla auctor a arcu non hendrerit. In at facilisis magna.
              Aliquam urna metus, congue nec tincidunt ac, maximus vel lorem.
              Donec et pellentesque nisi. Sed ornare quam at est ornare, in
              sagittis dolor pharetra. Vivamus a feugiat leo, vitae aliquet
              enim.
            </p>
            <img
              src={require('./img/rgcplantation.jpg')}
              style={{ width: '100%', maxWidth: '1000px' }}
              className='w3-margin-top'
            />
            <br />
            <p>
              <i>
                A successful plantation drive event in Begas as a part of Dan
                Utsav, October 2019
              </i>
            </p>
            <br />
            <p style={{ fontSize: '35px' }}>
              <strong>Club email:</strong> greenclubmuj@gmail.com
            </p>
          </div>
        </div>

        <div
          className='w3-container'
          id='where'
          style={{ paddingBottom: '32px' }}
        >
          <div className='w3-content' style={{ maxWidth: '700px' }}>
            <h5 className='w3-center w3-padding-48'>
              <span className='w3-tag w3-wide' style={{ fontSize: '30px' }}>
                Key members
              </span>
            </h5>
            <div className='row'>
              <div className='col-md-5'>
                <img
                  src={require('./img/Shruti di.jpg')}
                  style={{
                    width: '350px',
                    maxWidth: '1000px',
                    height: '350px',
                  }}
                  className='w3-margin-top'
                />
                <p>
                  <i>
                    <strong>Shruti Gupta</strong>, President
                  </i>
                </p>
              </div>
              <div className='col-md-1'></div>
              <div className='col-md-5'>
                {' '}
                <img
                  src={require('./img/Jayant bhaiya.jpg')}
                  style={{
                    width: '350px',
                    maxWidth: '1000px',
                    height: '350px',
                  }}
                  className='w3-margin-top'
                />
                <p>
                  <i>
                    <strong>Jayant Sardana</strong>, Vice President
                  </i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className='w3-center w3-light-grey w3-padding-48 w3-large'>
        <p>Developed by: Kartik Soni</p>
      </footer>
    </div>
  );
};

export default About;
