import React, { useState } from 'react';
import '../../Styles/Admin/Events.css'; // Import your CSS file for styling
import { Button, Modal, Form } from 'react-bootstrap';
import { isEventNameUniqueOnDate, doEventsOverlap,  parseTimeString  } from '../Admin/Validation/EventValidation.js';

function Events() {
    const [activeAccordion, setActiveAccordion] = useState('events');
    const [eventData, setEventData] = useState([
        { id: 1, name: 'Event 1', description: 'Freshers-meet', venue: 'Venue 1', date: '2023-09-15', start_time: '10:00', end_time: '11:30' },
        { id: 2, name: 'Event 2', description: 'Dev-review', venue: 'Venue 1', date: '2023-09-15', start_time: '10:00', end_time: '11:30' },
        { id: 3, name: 'Event 3', description: 'Onam_celebrations', venue: 'Venue 2', date: '2023-09-15', start_time: '10:00', end_time: '11:30' },
        { id: 4, name: 'Event 4', description: 'Training_program', venue: 'Venue 3', date: '2023-09-15', start_time: '10:00', end_time: '11:30' },
        { id: 5, name: 'Event 5', description: 'cdm-meet', venue: 'Venue 2', date: '2023-09-15', start_time: '10:00', end_time: '11:30' },
        { id: 6, name: 'Event 6', description: 'project-alloc', venue: 'Venue 3', date: '2023-09-15', start_time: '10:00', end_time: '11:30' },
        { id: 7, name: 'Event 7', description: 'Onam_celebrations', venue: 'Venue 2', date: '2023-09-15', start_time: '10:00', end_time: '11:30' },
        // { id: 8, name: 'Event 1', description: 'Freshers-meet', venue: 'Venue 1', date: '2023-09-15', start_time: '10:00', end_time: '11:30' },
        // { id: 9, name: 'Event 2', description: 'Dev-review', venue: 'Venue 1', date: '2023-09-15', start_time: '10:00', end_time: '11:30' },
        // { id: 10, name: 'Event 3', description: 'Onam_celebrations', venue: 'Venue 2', date: '2023-09-15', start_time: '10:00', end_time: '11:30' },
        // { id: 11, name: 'Event 4', description: 'Training_program', venue: 'Venue 3', date: '2023-09-15', start_time: '10:00', end_time: '11:30' },
        // { id: 12, name: 'Event 5', description: 'cdm-meet', venue: 'Venue 2', date: '2023-09-15', start_time: '10:00', end_time: '11:30' },
        // { id: 13, name: 'Event 6', description: 'project-alloc', venue: 'Venue 3', date: '2023-09-15', start_time: '10:00', end_time: '11:30' },
        // { id: 14, name: 'Event 7', description: 'Onam_celebrations', venue: 'Venue 2', date: '2023-09-15', start_time: '10:00', end_time: '11:30' },
        // { id: 1, name: 'Event 1', description: 'Freshers-meet', venue: 'Venue 1', date: '2023-09-15', start_time: '10:00', end_time: '11:30' },
        // { id: 2, name: 'Event 2', description: 'Dev-review', venue: 'Venue 1', date: '2023-09-15', start_time: '10:00', end_time: '11:30' },
        // { id: 3, name: 'Event 3', description: 'Onam_celebrations', venue: 'Venue 2', date: '2023-09-15', start_time: '10:00', end_time: '11:30' },
        // { id: 4, name: 'Event 4', description: 'Training_program', venue: 'Venue 3', date: '2023-09-15', start_time: '10:00', end_time: '11:30' },
        // { id: 5, name: 'Event 5', description: 'cdm-meet', venue: 'Venue 2', date: '2023-09-15', start_time: '10:00', end_time: '11:30' },
        // { id: 6, name: 'Event 6', description: 'project-alloc', venue: 'Venue 3', date: '2023-09-15', start_time: '10:00', end_time: '11:30' },
        // { id: 7, name: 'Event 7', description: 'Onam_celebrations', venue: 'Venue 2', date: '2023-09-15', start_time: '10:00', end_time: '11:30' },
    ]);
    const [isAddEventModalOpen, setAddEventModalOpen] = useState(false);
    const [isUpdateEventModalOpen, setUpdateEventModalOpen] = useState(false);
    const [newEvent, setNewEvent] = useState({
        id: '',
        name: '',
        description: '',
        venue: '',
        date: '',
        start_time: '',
        end_time: '',
    });
    const [selectedEventIndex, setSelectedEventIndex] = useState(null);
    const [isFormValid, setFormValid] = useState(true);

    const handleAccordionClick = (accordionId) => {
        setActiveAccordion((prevAccordion) =>
            prevAccordion === accordionId ? null : accordionId
        );
    };

    // Function to toggle the Add Event modal
    const toggleAddEventModal = () => {
        setNewEvent({
            id: '',
            name: '',
            description: '',
            venue: '',
            date: '',
            start_time: '',
            end_time: '',
        });
        setAddEventModalOpen((prevIsOpen) => !prevIsOpen);
    };

    // Function to toggle the Update Event form modal
    const toggleUpdateEvent = (index) => {
        setSelectedEventIndex(index);
        setNewEvent(eventData[index]); // Initialize the form with the data of the selected event
        setUpdateEventModalOpen((prevIsOpen) => !prevIsOpen);
    };

    // Function to handle input changes in the Add Event form
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewEvent((prevNewEvent) => ({
            ...prevNewEvent,
            [name]: value,
        }));
    };

    const [eventNameError, setEventNameError] = useState('');
    const [timeOverlapError, setTimeOverlapError] = useState('');
    const parseTimeString = (timeString) => {
        const [hours, minutes] = timeString.split(':').map(Number);
        return new Date(0, 0, 0, hours, minutes);
    };

    // Function to handle form submission for adding a new event
    const handleSubmit = () => {
        // Check if all required fields are filled
        const isFormValid =
            newEvent.name.trim() !== '' &&
            newEvent.description.trim() !== '' &&
            newEvent.venue.trim() !== '' &&
            newEvent.date.trim() !== '' &&
            newEvent.start_time.trim() !== '' &&
            newEvent.end_time.trim() !== '';

        // Update isFormValid state based on form validity
        setFormValid(isFormValid);

        if (isFormValid) {

            // Check if start_time is before end_time
            const startTimeDate = parseTimeString(newEvent.start_time);
            const endTimeDate = parseTimeString(newEvent.end_time);

            // Check if the event name is unique on the same day
            if (isEventNameUniqueOnDate(eventData, newEvent.name, newEvent.date )) {
                setEventNameError('Event with the same name already exists on this day');
                return;
            } else {
                setEventNameError(''); // Clear the error message
            }

            // Check for overlapping start and end times on the same day
            if (doEventsOverlap(eventData, newEvent.start_time, newEvent.end_time, newEvent.date)) {
                setTimeOverlapError('Events overlap in time on the same day');
                return;
            } else {
                setTimeOverlapError(''); // Clear the error message
            }

            // Check Start time must be before end time
            if (startTimeDate >= endTimeDate) {
                setTimeOverlapError('Start time must be before end time');
                return;
            } else {
                setTimeOverlapError(''); // Clear the error message
            }


            // Add the event if validation passes
            setEventData((prevEventData) => [...prevEventData, newEvent]);


            // Clear the form fields
            setNewEvent({
                id: '',
                name: '',
                description: '',
                venue: '',
                date: '',
                start_time: '',
                end_time: '',
            });

            // Close the modal
            setAddEventModalOpen(false);

            // Log new event data to console
            console.log('New Event:', newEvent);
        }
    };




    // Function to handle form submission for updating an event
    const handleUpdate = () => {
        // Check if all required fields are filled
        const isFormValid =
            newEvent.name.trim() !== '' &&
            newEvent.description.trim() !== '' &&
            newEvent.venue.trim() !== '' &&
            newEvent.date.trim() !== '' &&
            newEvent.start_time.trim() !== '' &&
            newEvent.end_time.trim() !== '';

        // Update isFormValid state based on form validity
        setFormValid(isFormValid);

        if (isFormValid) {

            // Check if start_time is before end_time
            const startTimeDate = parseTimeString(newEvent.start_time);
            const endTimeDate = parseTimeString(newEvent.end_time);

            // Check if the event name is unique on the same day
            if (isEventNameUniqueOnDate(eventData, newEvent.name, newEvent.date, newEvent)) {
                setEventNameError('Event with the same name already exists on this day');
                return;
            } else {
                setEventNameError(''); // Clear the error message
            }

            // Check for overlapping start and end times on the same day
            if (doEventsOverlap(eventData, newEvent.start_time, newEvent.end_time, newEvent.date, newEvent)) {
                setTimeOverlapError('Events overlap in time on the same day');
                return;
            } else {
                setTimeOverlapError(''); // Clear the error message
            }

            if (startTimeDate >= endTimeDate) {
                setTimeOverlapError('Start time must be before end time');
                return;
            } else {
                setTimeOverlapError(''); // Clear the error message
            }

        const updatedEventData = [...eventData];
        updatedEventData[selectedEventIndex] = newEvent;
        setEventData(updatedEventData);
        setNewEvent({
            id: '',
            name: '',
            description: '',
            venue: '',
            date: '',
            start_time: '',
            end_time: '',
        });
        setUpdateEventModalOpen(false);

        // Log updated event data to console
        console.log('Updated Event:', newEvent);
    }
};

    //     if (isFormValid) {
    //         const updatedEventData = [...eventData];
    //         updatedEventData[selectedEventIndex] = newEvent;
    //         setEventData(updatedEventData);
    //         setNewEvent({
    //             id: '',
    //             name: '',
    //             description: '',
    //             venue: '',
    //             date: '',
    //             start_time: '',
    //             end_time: '',
    //         });
    //         setUpdateEventModalOpen(false);

    //         // Log updated event data to console
    //         console.log('Updated Event:', newEvent);
    //     }
    // };



    // Function to handle form submission for deleting an event
    const handleDelete = (eventId) => {
        const updatedEventData = eventData.filter((event) => event.id !== eventId);
        setEventData(updatedEventData);
        setUpdateEventModalOpen(false);

        // Log the ID of the deleted event
        console.log('Event deleted, ID:', eventId);
    };

    const [searchInput, setSearchInput] = useState('');

    // Function to handle changes in the search input
    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    // Filter users based on the search input
    const filteredEvents = eventData.filter((event) => {
        const eventName = `${event.name} `.toLowerCase();
        return eventName.includes(searchInput.toLowerCase());
    });

    // Add a variable to hold the users to be displayed
    const eventsToDisplay = searchInput.trim() === '' ? eventData : filteredEvents;


    return (
        <div className="events-container">
            <div className="accordion events-accordion-item" id="sidebarAccordion">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="events">
                        <button
                            className={`accordion-button accordion-button-custom ${activeAccordion === 'events' ? '' : 'collapsed'}`}
                            type="button"
                            onClick={() => handleAccordionClick('events')}
                        >
                            Events
                        </button>
                    </h2>
                    <div
                        id="collapseEvents"
                        className={`accordion-collapse collapse ${activeAccordion === 'events' ? 'show' : ''}`}
                        aria-labelledby="events"
                        data-bs-parent="#sidebarAccordion"
                    >
                        <div className="accordion-body">
                            {activeAccordion === 'events' && (
                                <>
                                    <div className="search-bar">
                                        <input
                                            type="text"
                                            placeholder="Search by Event-name..."
                                            value={searchInput}
                                            onChange={handleSearchInputChange}
                                        />
                                    </div>
                                    <div className='events-table-container'>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Description</th>
                                                    <th>Venue</th>
                                                    <th>Date</th>
                                                    <th>Start-time</th>
                                                    <th>End-time</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {eventsToDisplay.map((event, index) => (
                                                    <tr key={index}>
                                                        <td>{event.name}</td>
                                                        <td>{event.description}</td>
                                                        <td>{event.venue}</td>
                                                        <td>{event.date}</td>
                                                        <td>{event.start_time}</td>
                                                        <td>{event.end_time}</td>
                                                        <td>
                                                            <button
                                                                className="btn-update btn-primary"
                                                                onClick={() => toggleUpdateEvent(index)}
                                                            >
                                                                Update
                                                            </button>
                                                            <button
                                                                className="btn-delete btn-danger"
                                                                onClick={() => handleDelete(event.id)}
                                                            >
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <button
                                        className="btn-success btn-add "
                                        onClick={toggleAddEventModal}
                                    >
                                        Add Event
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={isAddEventModalOpen} onHide={toggleAddEventModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="name">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={newEvent.name}
                                onChange={handleInputChange}
                                required
                            />
                            {eventNameError && <p className="text-danger">{eventNameError}</p>}
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label>Description:</Form.Label>
                            <Form.Control
                                type="text"
                                name="description"
                                value={newEvent.description}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="venue">
                            <Form.Label>Venue:</Form.Label>
                            <Form.Control
                                type="text"
                                name="venue"
                                value={newEvent.venue}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="date">
                            <Form.Label>Date:</Form.Label>
                            <Form.Control
                                type="date"
                                name="date"
                                value={newEvent.date}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="start_time">
                            <Form.Label>Start Time:</Form.Label>
                            <Form.Control
                                type="time"
                                name="start_time"
                                value={newEvent.start_time}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="end_time">
                            <Form.Label>End Time:</Form.Label>
                            <Form.Control
                                type="time"
                                name="end_time"
                                value={newEvent.end_time}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        {timeOverlapError && <p className="text-danger">{timeOverlapError}</p>}
                    </Form>
                    {!isFormValid && (
                        <p className="text-danger">Please fill in all required fields.</p>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Update Event modal */}
            <Modal show={isUpdateEventModalOpen} onHide={() => setUpdateEventModalOpen(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="name">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={newEvent.name}
                                onChange={handleInputChange}
                                required
                            />
                            {eventNameError && <p className="text-danger">{eventNameError}</p>}
                        </Form.Group>
                        <Form.Group controlId="description">
                            <Form.Label>Description:</Form.Label>
                            <Form.Control
                                type="text"
                                name="description"
                                value={newEvent.description}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="venue">
                            <Form.Label>Venue:</Form.Label>
                            <Form.Control
                                type="text"
                                name="venue"
                                value={newEvent.venue}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="date">
                            <Form.Label>Date:</Form.Label>
                            <Form.Control
                                type="date"
                                name="date"
                                value={newEvent.date}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="start_time">
                            <Form.Label>Start Time:</Form.Label>
                            <Form.Control
                                type="time"
                                name="start_time"
                                value={newEvent.start_time}
                                onChange={handleInputChange}
                                required
                            />    
                        </Form.Group>
                        <Form.Group controlId="end_time">
                            <Form.Label>End Time:</Form.Label>
                            <Form.Control
                                type="time"
                                name="end_time"
                                value={newEvent.end_time}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        {timeOverlapError && <p className="text-danger">{timeOverlapError}</p>}
                    </Form>
                    {!isFormValid && (
                        <p className="text-danger">Please fill in all required fields.</p>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleUpdate}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Events;





