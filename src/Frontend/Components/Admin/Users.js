import React, { useState } from 'react';
import '../../Styles/Admin/Users.css'; // Import your CSS file for styling
import { Button, Modal, Form } from 'react-bootstrap'; // Import Bootstrap components

import {
    validateEmailDomain,
    validatePhoneNumber,
    validateAge,
    validateEmergencyContact,
    validatePassword,
    validateDateOfJoining,
} from '../Admin/Validation/AddUserValidation.js';


function Users() {
    const [activeAccordion, setActiveAccordion] = useState('users');
    const [userData, setUserData] = useState([
        {
            id: 1, first_name: 'John', last_name: 'Cena', email: 'john.Cena@jman.com', contact_no: '784-456-7890', dob: '1990-01-15',
            designation: 'Developer', emerg_contact: '932-654-2310', blood_grp: 'O+', password: 'password123', doj: '2021-03-20',
        },
        {
            id: 2, first_name: 'Randy', last_name: 'Orton', email: 'john.Cena@jman.com', contact_no: '784-456-7890', dob: '1990-01-15',
            designation: 'Developer', emerg_contact: '932-654-2310', blood_grp: 'O+', password: 'password123', doj: '2021-03-20',
        },
        {
            id: 3, first_name: 'Roman', last_name: 'Reigns', email: 'john.Cena@jman.com', contact_no: '784-456-7890', dob: '1990-01-15',
            designation: 'Developer', emerg_contact: '932-654-2310', blood_grp: 'O+', password: 'password123', doj: '2021-03-20',
        },
        {
            id: 4, first_name: 'Triple', last_name: 'H', email: 'john.Cena@jman.com', contact_no: '784-456-7890', dob: '1990-01-15',
            designation: 'Developer', emerg_contact: '932-654-2310', blood_grp: 'O+', password: 'password123', doj: '2021-03-20',
        },
        {
            id: 5, first_name: 'John', last_name: 'Cena', email: 'john.Cena@jman.com', contact_no: '784-456-7890', dob: '1990-01-15',
            designation: 'Developer', emerg_contact: '932-654-2310', blood_grp: 'O+', password: 'password123', doj: '2021-03-20',
        },
        {
            id: 6, first_name: 'John', last_name: 'Cena', email: 'john.Cena@jman.com', contact_no: '784-456-7890', dob: '1990-01-15',
            designation: 'Developer', emerg_contact: '932-654-2310', blood_grp: 'O+', password: 'password123', doj: '2021-03-20',
        },
        {
            id: 7, first_name: 'Randy', last_name: 'Orton', email: 'john.Cena@jman.com', contact_no: '784-456-7890', dob: '1990-01-15',
            designation: 'Developer', emerg_contact: '932-654-2310', blood_grp: 'O+', password: 'password123', doj: '2021-03-20',
        },
        {
            id: 8, first_name: 'Roman', last_name: 'Reigns', email: 'john.Cena@jman.com', contact_no: '784-456-7890', dob: '1990-01-15',
            designation: 'Developer', emerg_contact: '932-654-2310', blood_grp: 'O+', password: 'password123', doj: '2021-03-20',
        },
        {
            id: 9, first_name: 'Triple', last_name: 'H', email: 'john.Cena@jman.com', contact_no: '784-456-7890', dob: '1990-01-15',
            designation: 'Developer', emerg_contact: '932-654-2310', blood_grp: 'O+', password: 'password123', doj: '2021-03-20',
        },
        {
            id: 10, first_name: 'John', last_name: 'Cena', email: 'john.Cena@jman.com', contact_no: '784-456-7890', dob: '1990-01-15',
            designation: 'Developer', emerg_contact: '932-654-2310', blood_grp: 'O+', password: 'password123', doj: '2021-03-20',
        },
        {
            id: 1, first_name: 'John', last_name: 'Cena', email: 'john.Cena@jman.com', contact_no: '784-456-7890', dob: '1990-01-15',
            designation: 'Developer', emerg_contact: '932-654-2310', blood_grp: 'O+', password: 'password123', doj: '2021-03-20',
        },
        {
            id: 2, first_name: 'Randy', last_name: 'Orton', email: 'john.Cena@jman.com', contact_no: '784-456-7890', dob: '1990-01-15',
            designation: 'Developer', emerg_contact: '932-654-2310', blood_grp: 'O+', password: 'password123', doj: '2021-03-20',
        },
        {
            id: 3, first_name: 'Roman', last_name: 'Reigns', email: 'john.Cena@jman.com', contact_no: '784-456-7890', dob: '1990-01-15',
            designation: 'Developer', emerg_contact: '932-654-2310', blood_grp: 'O+', password: 'password123', doj: '2021-03-20',
        },
        {
            id: 4, first_name: 'Triple', last_name: 'H', email: 'john.Cena@jman.com', contact_no: '784-456-7890', dob: '1990-01-15',
            designation: 'Developer', emerg_contact: '932-654-2310', blood_grp: 'O+', password: 'password123', doj: '2021-03-20',
        },
        {
            id: 5, first_name: 'John', last_name: 'Cena', email: 'john.Cena@jman.com', contact_no: '784-456-7890', dob: '1990-01-15',
            designation: 'Developer', emerg_contact: '932-654-2310', blood_grp: 'O+', password: 'password123', doj: '2021-03-20',
        },
        {
            id: 6, first_name: 'John', last_name: 'Cena', email: 'john.Cena@jman.com', contact_no: '784-456-7890', dob: '1990-01-15',
            designation: 'Developer', emerg_contact: '932-654-2310', blood_grp: 'O+', password: 'password123', doj: '2021-03-20',
        },
        {
            id: 7, first_name: 'Randy', last_name: 'Orton', email: 'john.Cena@jman.com', contact_no: '784-456-7890', dob: '1990-01-15',
            designation: 'Developer', emerg_contact: '932-654-2310', blood_grp: 'O+', password: 'password123', doj: '2021-03-20',
        },
        {
            id: 8, first_name: 'Roman', last_name: 'Reigns', email: 'john.Cena@jman.com', contact_no: '784-456-7890', dob: '1990-01-15',
            designation: 'Developer', emerg_contact: '932-654-2310', blood_grp: 'O+', password: 'password123', doj: '2021-03-20',
        },
        {
            id: 9, first_name: 'Triple', last_name: 'H', email: 'john.Cena@jman.com', contact_no: '784-456-7890', dob: '1990-01-15',
            designation: 'Developer', emerg_contact: '932-654-2310', blood_grp: 'O+', password: 'password123', doj: '2021-03-20',
        },
        {
            id: 10, first_name: 'John', last_name: 'Cena', email: 'john.Cena@jman.com', contact_no: '784-456-7890', dob: '1990-01-15',
            designation: 'Developer', emerg_contact: '932-654-2310', blood_grp: 'O+', password: 'password123', doj: '2021-03-20',
        },

    ]);
    const [isAddUserModalOpen, setAddUserModalOpen] = useState(false);
    const [isUpdateUserModalOpen, setUpdateUserModalOpen] = useState(false);
    const [newUser, setNewUser] = useState({
        id: '',
        first_name: '',
        last_name: '',
        email: '',
        contact_no: '',
        dob: '',
        designation: '',
        emerg_contact: '',
        blood_grp: '',
        password: '',
        doj: '',
    });
    const [selectedUserIndex, setSelectedUserIndex] = useState(null);
    const [isFormValid, setFormValid] = useState(true);

    const handleAccordionClick = (accordionId) => {
        setActiveAccordion((prevAccordion) =>
            prevAccordion === accordionId ? null : accordionId
        );
    };

    // Function to toggle the Add User modal
    const toggleAddUserModal = () => {
        setNewUser({
            id: '',
            first_name: '',
            last_name: '',
            email: '',
            contact_no: '',
            dob: '',
            designation: '',
            emerg_contact: '',
            blood_grp: '',
            password: '',
            doj: '',
        });
        setAddUserModalOpen((prevIsOpen) => !prevIsOpen);
    };

    // Function to toggle the Update User form modal
    const toggleUpdateUser = (index) => {
        setSelectedUserIndex(index);
        setNewUser(userData[index]); // Initialize the form with the data of the selected user
        setUpdateUserModalOpen((prevIsOpen) => !prevIsOpen);
    };

    // Function to handle input changes in the Add User form
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewUser((prevNewUser) => ({
            ...prevNewUser,
            [name]: value,
        }));
    };

    const [emailError, setEmailError] = useState('');
    const [contactNoError, setContactNoError] = useState('');
    const [dobError, setDobError] = useState('');
    const [emergencyContactError, setEmergencyContactError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [dojError, setDojError] = useState('');


    // Function to handle form submission for adding a new user
    const handleSubmit = () => {

        // Reset error messages
        setEmailError('');
        setContactNoError('');
        setDobError('');
        setEmergencyContactError('');
        setPasswordError('');
        setDojError('');

        // Check if all required fields are filled
        const isFormValid =
            newUser.first_name.trim() !== '' &&
            newUser.last_name.trim() !== '' &&
            validateEmailDomain(newUser.email) &&
            validatePhoneNumber(newUser.contact_no) &&
            validateAge(newUser.dob) &&
            newUser.designation.trim() !== '' &&
            validateEmergencyContact(newUser.emerg_contact) &&
            newUser.blood_grp.trim() !== '' &&
            validatePassword(newUser.password) &&
            validateDateOfJoining(newUser.doj);

        // Update isFormValid state based on form validity
        setFormValid(isFormValid);

        if (isFormValid) {
            setUserData((prevUserData) => [...prevUserData, newUser]);
            // Clear the form fields
            setNewUser({
                id: '',
                first_name: '',
                last_name: '',
                email: '',
                contact_no: '',
                dob: '',
                designation: '',
                emerg_contact: '',
                blood_grp: '',
                password: '',
                doj: '',
            });
            setAddUserModalOpen(false);

            // Log new user data to console
            console.log('New User:', newUser);
        } else {
            // Set error messages for each field that failed validation
            if (!validateEmailDomain(newUser.email)) {
                setEmailError('Email must be in @jmangroup.com domain');
            }
            if (!validatePhoneNumber(newUser.contact_no)) {
                setContactNoError('Contact-no must be a 10-digit number');
            }
            if (!validateAge(newUser.dob)) {
                setDobError('Age must be greater than or equal to 20 years');
            }
            if (!validateEmergencyContact(newUser.emerg_contact)) {
                setEmergencyContactError('Emergency-contact must be a 10-digit number');
            }
            if (!validatePassword(newUser.password)) {
                setPasswordError('Password contains min 8 char,At least a number,symbol,small case,large case');
            }
            if (!validateDateOfJoining(newUser.doj)) {
                setDojError('Date of joining must be less than or equal to 7 years from now');
            }
        }
    };

    // Function to handle form submission for updating a user
    const handleUpdate = () => {

        // Reset error messages
        setEmailError('');
        setContactNoError('');
        setDobError('');
        setEmergencyContactError('');
        setPasswordError('');
        setDojError('');

        // Check if all required fields are filled
        const isFormValid =
            newUser.first_name.trim() !== '' &&
            newUser.last_name.trim() !== '' &&
            validateEmailDomain(newUser.email) &&
            validatePhoneNumber(newUser.contact_no) &&
            validateAge(newUser.dob) &&
            newUser.designation.trim() !== '' &&
            validateEmergencyContact(newUser.emerg_contact) &&
            newUser.blood_grp.trim() !== '' &&
            validatePassword(newUser.password) &&
            validateDateOfJoining(newUser.doj);

        // Update isFormValid state based on form validity
        setFormValid(isFormValid);

        if (isFormValid) {
            const updatedUserData = [...userData];
            updatedUserData[selectedUserIndex] = newUser;
            setUserData(updatedUserData);
            setNewUser({
                id: '',
                first_name: '',
                last_name: '',
                email: '',
                contact_no: '',
                dob: '',
                designation: '',
                emerg_contact: '',
                blood_grp: '',
                password: '',
                doj: '',
            });
            setUpdateUserModalOpen(false);

            // Log updated user data to console
            console.log('Updated User:', newUser);
        }else {
            // Set error messages for each field that failed validation
            if (!validateEmailDomain(newUser.email)) {
                setEmailError('Email must be in @jmangroup.com domain');
            }
            if (!validatePhoneNumber(newUser.contact_no)) {
                setContactNoError('Contact-no must be a 10-digit number');
            }
            if (!validateAge(newUser.dob)) {
                setDobError('Age must be greater than or equal to 20 years');
            }
            if (!validateEmergencyContact(newUser.emerg_contact)) {
                setEmergencyContactError('Emergency-contact must be a 10-digit number');
            }
            if (!validatePassword(newUser.password)) {
                setPasswordError('Password must be at least 8 characters long and have a capital letter a small letter and a number"');
            }
            if (!validateDateOfJoining(newUser.doj)) {
                setDojError('Date of joining must be less than or equal to 7 years from now');
            }
        }
    };

    // Function to handle form submission for deleting a user
    const handleDelete = (userId) => {
        const updatedUserData = userData.filter((user) => user.id !== userId);
        setUserData(updatedUserData);
        setUpdateUserModalOpen(false);

        // Log the ID of the deleted user
        console.log('User deleted, ID:', userId);
    };

    const [searchInput, setSearchInput] = useState('');

    // Function to handle changes in the search input
    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    // Filter users based on the search input
    const filteredUsers = userData.filter((user) => {
        const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
        return fullName.includes(searchInput.toLowerCase());
    });

    // Add a variable to hold the users to be displayed
    const usersToDisplay = searchInput.trim() === '' ? userData : filteredUsers;




    return (
        <div className="user-container">
            <div className="accordion users-accordion-item" id="sidebarAccordion">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="users">
                        <button
                            className={`accordion-button accordion-button-custom ${activeAccordion === 'users' ? '' : 'collapsed'
                                }`}
                            type="button"
                            onClick={() => handleAccordionClick('users')}
                        >
                            Users
                        </button>
                    </h2>
                    <div
                        id="collapseUsers"
                        className={`accordion-collapse collapse ${activeAccordion === 'users' ? 'show' : ''
                            }`}
                        aria-labelledby="users"
                        data-bs-parent="#sidebarAccordion"
                    >
                        <div className="accordion-body">
                            {activeAccordion === 'users' && (
                                <>
                                    <div className="search-bar">
                                        <input
                                            type="text"
                                            placeholder="Search by name..."
                                            value={searchInput}
                                            onChange={handleSearchInputChange}
                                        />
                                    </div>
                                    <div className='users-table-container'>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th>First-Name</th>
                                                    <th>Last-Name</th>
                                                    <th>Email</th>
                                                    <th>Contact-no</th>
                                                    <th>Dob</th>
                                                    <th>Designation</th>
                                                    <th>Emerg-contact</th>
                                                    <th>Blood-grp</th>
                                                    {/* <th>Password</th> */}
                                                    <th>Doj</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {usersToDisplay.map((user, index) => (
                                                    <tr key={index}>
                                                        <td>{user.first_name}</td>
                                                        <td>{user.last_name}</td>
                                                        <td>{user.email}</td>
                                                        <td>{user.contact_no}</td>
                                                        <td>{user.dob}</td>
                                                        <td>{user.designation}</td>
                                                        <td>{user.emerg_contact}</td>
                                                        <td>{user.blood_grp}</td>
                                                        {/* <td>{user.password}</td> */}
                                                        <td>{user.doj}</td>
                                                        <td>
                                                            <button

                                                                className="btn-update btn-primary"
                                                                onClick={() => toggleUpdateUser(index)}
                                                            >
                                                                {/* <FontAwesomeIcon icon={faEdit} />  */}
                                                                Update
                                                            </button>
                                                            <button

                                                                className="btn-delete btn-danger"
                                                                onClick={() => handleDelete(user.id)}
                                                            >
                                                                Delete
                                                                {/* <FontAwesomeIcon icon={faTrash} />  */}
                                                            </button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                    <button
                                        className="btn-success btn-add "
                                        onClick={toggleAddUserModal}
                                    >
                                        Add User
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={isAddUserModalOpen} onHide={toggleAddUserModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="first_name">
                            <Form.Label>First-Name:</Form.Label>
                            <Form.Control
                                type="text"
                                name="first_name"
                                value={newUser.first_name}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="last_name">
                            <Form.Label>Last-Name:</Form.Label>
                            <Form.Control
                                type="text"
                                name="last_name"
                                value={newUser.last_name}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={newUser.email}
                                onChange={handleInputChange}
                                required
                            />
                            {emailError && <p className="text-danger">{emailError}</p>}
                        </Form.Group>
                        <Form.Group controlId="contact_no">
                            <Form.Label>Contact-no:</Form.Label>
                            <Form.Control
                                type="text"
                                name="contact_no"
                                value={newUser.contact_no}
                                onChange={handleInputChange}
                                required
                            />
                            {contactNoError && <p className="text-danger">{contactNoError}</p>}
                        </Form.Group>
                        <Form.Group controlId="dob">
                            <Form.Label>Dob:</Form.Label>
                            <Form.Control
                                type="date"
                                name="dob"
                                value={newUser.dob}
                                onChange={handleInputChange}
                                required
                            />
                            {dobError && <p className="text-danger">{dobError}</p>}
                        </Form.Group>
                        <Form.Group controlId="designation">
                            <Form.Label>Designation:</Form.Label>
                            <Form.Control
                                type="text"
                                name="designation"
                                value={newUser.designation}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="emerg_contact">
                            <Form.Label>Emerg-contact:</Form.Label>
                            <Form.Control
                                type="text"
                                name="emerg_contact"
                                value={newUser.emerg_contact}
                                onChange={handleInputChange}
                                required
                            />
                            {emergencyContactError && <p className="text-danger">{emergencyContactError}</p>}
                        </Form.Group>
                        <Form.Group controlId="blood_grp">
                            <Form.Label>Blood-grp:</Form.Label>
                            <Form.Control
                                type="text"
                                name="blood_grp"
                                value={newUser.blood_grp}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={newUser.password}
                                onChange={handleInputChange}
                                required
                            />
                            {passwordError && <p className="text-danger">{passwordError}</p>}
                        </Form.Group>
                        <Form.Group controlId="doj">
                            <Form.Label>Doj:</Form.Label>
                            <Form.Control
                                type="date"
                                name="doj"
                                value={newUser.doj}
                                onChange={handleInputChange}
                                required
                            />
                            {dojError && <p className="text-danger">{dojError}</p>}
                        </Form.Group>
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

            {/* Update User modal */}
            <Modal show={isUpdateUserModalOpen} onHide={() => setUpdateUserModalOpen(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Update User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="first_name">
                            <Form.Label>First-Name:</Form.Label>
                            <Form.Control
                                type="text"
                                name="first_name"
                                value={newUser.first_name}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="last_name">
                            <Form.Label>Last-Name:</Form.Label>
                            <Form.Control
                                type="text"
                                name="last_name"
                                value={newUser.last_name}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={newUser.email}
                                onChange={handleInputChange}
                                required
                            />
                            {emailError && <p className="text-danger">{emailError}</p>}
                        </Form.Group>
                        <Form.Group controlId="contact_no">
                            <Form.Label>Contact-no:</Form.Label>
                            <Form.Control
                                type="text"
                                name="contact_no"
                                value={newUser.contact_no}
                                onChange={handleInputChange}
                                required
                            />
                            {contactNoError && <p className="text-danger">{contactNoError}</p>}

                        </Form.Group>
                        <Form.Group controlId="dob">
                            <Form.Label>Dob:</Form.Label>
                            <Form.Control
                                type="date"
                                name="dob"
                                value={newUser.dob}
                                onChange={handleInputChange}
                                required
                            />
                            {dobError && <p className="text-danger">{dobError}</p>}
                        </Form.Group>
                        <Form.Group controlId="designation">
                            <Form.Label>Designation:</Form.Label>
                            <Form.Control
                                type="text"
                                name="designation"
                                value={newUser.designation}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="emerg_contact">
                            <Form.Label>Emerg-contact:</Form.Label>
                            <Form.Control
                                type="text"
                                name="emerg_contact"
                                value={newUser.emerg_contact}
                                onChange={handleInputChange}
                                required
                            />
                            {emergencyContactError && <p className="text-danger">{emergencyContactError}</p>}
                        </Form.Group>
                        <Form.Group controlId="blood_grp">
                            <Form.Label>Blood-grp:</Form.Label>
                            <Form.Control
                                type="text"
                                name="blood_grp"
                                value={newUser.blood_grp}
                                onChange={handleInputChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={newUser.password}
                                onChange={handleInputChange}
                                required
                            />
                            {passwordError && <p className="text-danger">{passwordError}</p>}
                        </Form.Group>
                        <Form.Group controlId="doj">
                            <Form.Label>Doj:</Form.Label>
                            <Form.Control
                                type="date"
                                name="doj"
                                value={newUser.doj}
                                onChange={handleInputChange}
                                required
                            />
                             {dojError && <p className="text-danger">{dojError}</p>}
                        </Form.Group>
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

export default Users;
