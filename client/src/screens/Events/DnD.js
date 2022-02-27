import React, { useState, useEffect } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { Row, Col, Image, Container } from 'react-bootstrap'
import Bible from '../../assets/events/Bible.jpg'
import Bouquet from '../../assets/events/bouquet.jpg'
import Cleaning from '../../assets/events/cleaning.jpg'
import Crafts from '../../assets/events/crafts.png'
import Food_drive from '../../assets/events/food_drive.png'
import '../../index.css'

const DnD = () => {
  const [images, setImages] = useState([
    Bible,
    Bouquet,
    Cleaning,
    Crafts,
    Food_drive,
  ])
  const [order, setOrder] = useState()

  const style = {
    maxHeight: '150px',
    maxWidth: '150px',
    padding: '20px auto',
    margin: '20px auto',
    textAlign: 'center',
  }
  const rowStyle = {
    border: '1px solid black',
    backgroundColor: '#333',
  }

  const handleOnDragEnd = async result => {
    if (!result.destination) return
    const items = Array.from(images)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    await setOrder(result.destination.index)
    await setImages(items)
  }

  useEffect(() => {
    console.log(order)
  }, [handleOnDragEnd])

  return (
    <>
      <Container style={{ maxWidth: '50vw' }}>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId='pictures'>
            {provided => (
              <ul
                className='events'
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {images.map((image, i) => {
                  const id = i
                  return (
                    <Draggable key={image} draggableId={image} index={i}>
                      {provided => (
                        <li
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <Row style={rowStyle}>
                            <Col className='text-center'>
                              <Image
                                id={image}
                                style={style}
                                src={image}
                              ></Image>
                            </Col>
                          </Row>
                        </li>
                      )}
                    </Draggable>
                  )
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </Container>
    </>
  )
}

export default DnD
