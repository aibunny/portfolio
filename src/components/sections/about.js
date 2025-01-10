  import React, { useEffect, useRef } from 'react';
  import { StaticImage } from 'gatsby-plugin-image';
  import styled from 'styled-components';
  import { srConfig } from '@config';
  import sr from '@utils/sr';
  import { usePrefersReducedMotion } from '@hooks';

  const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;

  const StyledJourney = styled.div`
  font-size: var(--fz-sm);
  color: var(--soft-green);
  line-height: 1.5;
  margin: 15px 0;

  a {
    color: var(--bright-strawberry);
    &:hover {
      text-decoration: underline;
    }
  }
`;

  const StyledText = styled.div`
  #my-tech {
    color: var(--bright-strawberry);
  }

  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      color: var(--soft-green);
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--bright-strawberry);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

  const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--light-strawberry);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--lightest-blue);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--bright-strawberry);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

  const About = () => {
    const revealContainer = useRef(null);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
      if (prefersReducedMotion) {
        return;
      }

      sr.reveal(revealContainer.current, srConfig());
    }, []);

    const skills = [
      'Typescript',
      'Rust',
      'Solidity',
      'NodeJs',
      'Docker',
      'Redis',
      'Kubernetes',
      'Python',
      'NOSQL',
      'SQL',
      'DBT',
      'Django Rest Framework',
      'Apache Superset',
      'Apache Kafka',
      'Apache Airflow'
    ];

    return (
      <StyledAboutSection id="about" ref={revealContainer}>
        <h2 className="numbered-heading">About Me</h2>

        <div className="inner">
          <StyledText>
            <div>
              <p>
                WSG Bunny here! After serving in various web2 roles as a data and backend engineer,
                I made the exciting decision to pivot into web3 technologies and decentralized systems.
                I am a self proclaimed DEGEN and a bullish builder.
              </p>

              <StyledJourney>
                <p>
                  What started as a curiosity transformed into a full-time passion when I transitioned from
                  traditional tech roles at companies like <a href="https://www.crafted.co.ke/">Crafted Systems</a> and{' '}
                  <a href="https://monzo.com/">Monzo</a> to dive headfirst into web3. Now, I spend my days crafting
                  DeFi protocols, building GameFi experiences, and running nodes across various networks.
                  There's something incredibly exciting about contributing to this space - whether it's optimizing
                  yield strategies, developing innovative gaming mechanics on-chain, or ensuring network security
                  through node operations.
                </p>
                <p>
                  My background in traditional tech combined with my hands-on experience in
                  blockchain development has given me a unique perspective on building scalable,
                  secure software applications.
                </p>
              </StyledJourney>

              <p>My current technical stack includes:</p>
            </div>

            <ul className="skills-list">
              {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
          </StyledText>

          <StyledPic>
            <div className="wrapper">
              <StaticImage
                className="img"
                src="../../images/samurai.jpeg"
                width={500}
                quality={95}
                formats={['AUTO', 'WEBP', 'AVIF']}
                alt="Headshot"
              />
            </div>
          </StyledPic>
        </div>
      </StyledAboutSection>
    );
  };

  export default About;
