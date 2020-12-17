import React from 'react';
import { Container } from 'components';

const Hero: React.FC = () => {
  return (
    <div className='hero'>
      <Container>
        <div className='hero-container'>
          <div>
            <div className='text-small mb-20'>Developers</div>
            <div className='text-small text-gray mb-10'>Docs</div>
            <div className='text-small text-gray mb-10'>Randomness</div>
            <div className='text-small text-gray mb-10'>VOR Nodes</div>
            <div className='text-small text-gray mb-10'>Github</div>
          </div>
          <div>
            <div className='text-small mb-20'>Community</div>
            <div className='text-small text-gray mb-10'>Overview</div>
            <div className='text-small text-gray mb-10'>Conduct</div>
            <div className='text-small text-gray mb-10'>New Events</div>
          </div>
          <div>
            <div className='text-small mb-20'>VOR</div>
            <div className='text-small text-gray mb-10'>Blog</div>
            <div className='text-small text-gray mb-10'>FAQs</div>
            <div className='text-small text-gray mb-10'>Get Ropsten VOR</div>
            <div className='text-small text-gray mb-10'>Verify Random Proof</div>
          </div>
          <div>
            <div className='text-small mb-20'>Contact</div>
            <div className='text-small text-gray mb-10'>Support</div>
          </div>
          <div>
            <div className='text-small mb-20'>Social</div>
            <div className='text-small text-gray mb-10'>Twitter</div>
            <div className='text-small text-gray mb-10'>Telegram</div>
            <div className='text-small text-gray mb-10'>Medium</div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero;
