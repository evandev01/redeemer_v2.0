import React, { Fragment } from 'react'
import { Row, Container } from 'react-bootstrap'
// import Parents from '../assets/events/parents.png'
// import Church from '../assets/church/church.jpg'
// import Watch from '../assets/icons/video-icon.jpg'
// import YouTube from '../assets/icons/youtube-logo2.png'

const Events = () => {
  return (
    <Fragment>
      <Container id='events-body'>
        <Row id='live-border' />
        <h3 className='text-center'>Coming Soon!</h3>
        {/* <Row className='text-center mt-3'>
          <Col lg={4}>
            <Image
              className='py-3'
              src={Parents}
              alt='Parents'
              style={{ maxHeight: '300px', width: 'auto' }}
            />
          </Col>
          <Col lg={8} md={12} className='justify-content-center'>
            <h6 id='lol-h6' className='text-center'>
              Parenting for God's Glory
            </h6>
            <p id='hebrew' className='text-center'>
              <strong>Nov 7th and 14th</strong>
              <br />
              Instruction from God's Word, fellowship sharing joys and struggles
              of parenting.
            </p>
            <p>
              For further details and directions, please call (219) 345-5725.
            </p>
          </Col>
        </Row>

        <Row id='live-border' />
        <Row className='text-center mt-3'>
          <Col lg={4}>
            <Image
              className='py-3'
              src={Church}
              alt='Wednesday night service'
              style={{ maxHeight: '300px', width: 'auto' }}
            />
          </Col>
          <Col lg={8} md={12} className='justify-content-center'>
            <h6 id='lol-h6' className='text-center'>
              End Time Truths to encourage our hearts.
            </h6>
            <p className='text-center'>
              <strong>Wednesday at 6:30pm</strong>
              <br />
              We welcome each one to come and study the Bible with us.
            </p>
          </Col>
        </Row>

        <Row id='live-border' />

        <Row className='text-center'>
          <Col md={1} />
          <Col md={5}>
            <Image
              id='watch'
              src={Watch}
              alt='Watch live sermons'
              className='ml-3'
            />
          </Col>

          <Col md={5} className='text-center'>
            <h4>Sermons Streaming Live Now!</h4>
            <p className='mt-3'>
              Click here{' '}
              <a href='https://www.youtube.com/channel/UCTblLpAk1fUXwWiMm3-u6wQ'>
                <Image id='youtube-logo' src={YouTube} alt='YouTube logo' />
              </a>
              {'  '}
              and subscribe to our channel!
            </p>
          </Col>
          <Col md={1} />
        </Row> */}
        <Row id='live-border' />
      </Container>
    </Fragment>
  )
}

export default Events
