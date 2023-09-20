import React, { useState } from 'react';
import '../../Styles/Admin/ProjectAllocation.css';
import { Button, Modal, Form } from 'react-bootstrap';

function ProjectAllocation() {
  const [activeAccordion, setActiveAccordion] = useState('projects');
  const [projectData, setProjectData] = useState([
    {
      id: 1,
      proj_name: 'Project A',
      start_date: '2023-01-15',
      end_date: '2023-06-30',
      users_alloc: {1:'John Doe'},
      tech_stack: 'React, Node.js',
    },
    {
      id: 2,
      proj_name: 'Project B',
      start_date: '2023-02-10',
      end_date: '2023-07-15',
      users_alloc: {5:'Jane Smith'},
      tech_stack: 'Angular, Java',
    },
    {
      id: 3,
      proj_name: 'Project C',
      start_date: '2023-01-15',
      end_date: '2023-06-30',
      users_alloc: {1:'John Doe'},
      tech_stack: 'React, Node.js',
    },
    {
      id: 4,
      proj_name: 'Project D',
      start_date: '2023-02-10',
      end_date: '2023-07-15',
      users_alloc: {5:'Jane Smith'},
      tech_stack: 'Angular, Java',
    },
    {
      id: 5,
      proj_name: 'Project E',
      start_date: '2023-01-15',
      end_date: '2023-06-30',
      users_alloc: {1:'John Doe'},
      tech_stack: 'React, Node.js',
    },
    {
      id: 6,
      proj_name: 'Project F',
      start_date: '2023-02-10',
      end_date: '2023-07-15',
      users_alloc:{5:'Jane Smith'},
      tech_stack: 'Angular, Java',
    },
    {
      id: 7,
      proj_name: 'Project G',
      start_date: '2023-01-15',
      end_date: '2023-06-30',
      users_alloc: {1:'John Doe'},
      tech_stack: 'React, Node.js',
    },
    {
      id: 8,
      proj_name: 'Project H',
      start_date: '2023-02-10',
      end_date: '2023-07-15',
      users_alloc: {5:'Jane Smith'},
      tech_stack: 'Angular, Java',
    },
    {
      id: 9,
      proj_name: 'Project I',
      start_date: '2023-01-15',
      end_date: '2023-06-30',
      users_alloc:{5:'Jane Smith'},
      tech_stack: 'React, Node.js',
    },
    {
      id: 10,
      proj_name: 'Project J',
      start_date: '2023-02-10',
      end_date: '2023-07-15',
      users_alloc:{5:'Jane Smith'},
      tech_stack: 'Angular, Java',
    },
    {
      id: 11,
      proj_name: 'Project K',
      start_date: '2023-01-15',
      end_date: '2023-06-30',
      users_alloc: {1:'John Doe'},
      tech_stack: 'React, Node.js',
    },
    {
      id: 12,
      proj_name: 'Project L',
      start_date: '2023-02-10',
      end_date: '2023-07-15',
      users_alloc: {5:'Jane Smith'},
      tech_stack: 'Angular, Java',
    },
    {
      id: 13,
      proj_name: 'Project M',
      start_date: '2023-01-15',
      end_date: '2023-06-30',
      users_alloc: {1:'John Doe'},
      tech_stack: 'React, Node.js',
    },
    {
      id: 14,
      proj_name: 'Project N',
      start_date: '2023-02-10',
      end_date: '2023-07-15',
      users_alloc: {5:'Jane Smith'},
      tech_stack: 'Angular, Java',
    },
    {
      id: 15,
      proj_name: 'Project O',
      start_date: '2023-01-15',
      end_date: '2023-06-30',
      users_alloc: {1:'John Doe'},
      tech_stack: 'React, Node.js',
    },
    {
      id: 16,
      proj_name: 'Project P',
      start_date: '2023-02-10',
      end_date: '2023-07-15',
      users_alloc: {5:'Jane Smith'},
      tech_stack: 'Angular, Java',
    },
  ]);
  const [isAddProjectModalOpen, setAddProjectModalOpen] = useState(false);
  const [isUpdateProjectModalOpen, setUpdateProjectModalOpen] = useState(false);
  const [newProject, setNewProject] = useState({
    id: '',
    proj_name: '',
    start_date: '',
    end_date: '',
    users_alloc: {}, // Object to store user IDs
    tech_stack: '',
  });
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [isFormValid, setFormValid] = useState(true);
  const [users] = useState([
    // ... your user data ...
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Alice Johnson' },
    { id: 4, name: 'rio' },
    { id: 5, name: 'Jane Smith' },
    { id: 6, name: 'Johnson' },
    { id: 7, name: 'Tokyo' },
    { id: 8, name: 'Jack Smith' },
    { id: 9, name: 'leo ' },
    { id: 10, name: 'Doe' },
    { id: 11, name: 'Jan' },
    { id: 12, name: 'eon' },
    { id: 13, name: 'ram' },
    { id: 14, name: 'dsd' },
    { id: 15, name: 'fdh' },
    { id: 16, name: 'Vin Diesel' },
    { id: 17, name: 'Smith' },
    { id: 19, name: 'rolex' },
  ]);

  const handleAccordionClick = (accordionId) => {
    setActiveAccordion((prevAccordion) =>
      prevAccordion === accordionId ? null : accordionId
    );
  };

  const toggleAddProjectModal = () => {
    setNewProject({
      id: '',
      proj_name: '',
      start_date: '',
      end_date: '',
      users_alloc: {}, // Object to store user names
      tech_stack: '',
    });
    setAddProjectModalOpen((prevIsOpen) => !prevIsOpen);
  };

  const toggleUpdateProject = (index) => {
    setSelectedProjectIndex(index);
    setNewProject(projectData[index]);
    setUpdateProjectModalOpen((prevIsOpen) => !prevIsOpen);
  };


const handleInputChange = (event) => {
  const { name, value, type } = event.target;
  if (type === 'checkbox') {
    const userId = parseInt(event.target.name); // Parse the user ID
    setNewProject((prevNewProject) => {
      const updatedUsersAlloc = { ...prevNewProject.users_alloc };

      if (event.target.checked) {
        updatedUsersAlloc[userId] = users.find((user) => user.id === userId).name; // Store user name
      } else {
        delete updatedUsersAlloc[userId]; // Remove user allocation
      }

      return {
        ...prevNewProject,
        users_alloc: updatedUsersAlloc,
      };
    });
  } else {
    setNewProject((prevNewProject) => ({
      ...prevNewProject,
      [name]: value,
    }));
  }
};

  const handleSubmit = () => {
    const isFormValid =
      newProject.proj_name.trim() !== '' &&
      newProject.start_date.trim() !== '' &&
      newProject.end_date.trim() !== '' &&
      Object.keys(newProject.users_alloc).length > 0 && // Check if at least one user is selected
      newProject.tech_stack.trim() !== '';

    setFormValid(isFormValid);

    if (isFormValid) {
      setProjectData((prevProjectData) => [
        ...prevProjectData,
        { ...newProject },
      ]);
      setNewProject({
        id: '',
        proj_name: '',
        start_date: '',
        end_date: '',
        users_alloc: {}, // Reset user selection
        tech_stack: '',
      });
      setAddProjectModalOpen(false);
      console.log('New Project:', newProject);
    }
  };

  const handleUpdate = () => {
    const isFormValid =
      newProject.proj_name.trim() !== '' &&
      newProject.start_date.trim() !== '' &&
      newProject.end_date.trim() !== '' &&
      Object.keys(newProject.users_alloc).length > 0 && // Check if at least one user is selected
      newProject.tech_stack.trim() !== '';

    setFormValid(isFormValid);

    if (isFormValid) {
      const updatedProjectData = [...projectData];
      updatedProjectData[selectedProjectIndex] = { ...newProject };
      setProjectData(updatedProjectData);
      setNewProject({
        id: '',
        proj_name: '',
        start_date: '',
        end_date: '',
        users_alloc: {}, // Reset user selection
        tech_stack: '',
      });
      setUpdateProjectModalOpen(false);
      console.log('Updated Project:', newProject);
    }
  };

  const handleDelete = (projectId) => {
    const updatedProjectData = projectData.filter(
      (project) => project.id !== projectId
    );
    setProjectData(updatedProjectData);
    setUpdateProjectModalOpen(false);
    console.log('Project deleted, ID:', projectId);
  };

  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const filteredProjects = projectData.filter((project) => {
    const projName = `${project.proj_name} `.toLowerCase();
    return projName.includes(searchInput.toLowerCase());
  });

  const projectsToDisplay =
    searchInput.trim() === '' ? projectData : filteredProjects;

  return (
    <div className="project-allocation-container">
      <div className="accordion project-accordion-item" id="projectAccordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id="projects">
            <button
              className={`accordion-button accordion-button-custom ${
                activeAccordion === 'projects' ? '' : 'collapsed'
              }`}
              type="button"
              onClick={() => handleAccordionClick('projects')}
            >
              Projects
            </button>
          </h2>
          <div
            id="collapseProjects"
            className={`accordion-collapse collapse ${
              activeAccordion === 'projects' ? 'show' : ''
            }`}
            aria-labelledby="projects"
            data-bs-parent="#projectAccordion"
          >
            <div className="accordion-body">
              {activeAccordion === 'projects' && (
                <>
                  <div className="search-bar">
                    <input
                      type="text"
                      placeholder="Search by Project-name..."
                      value={searchInput}
                      onChange={handleSearchInputChange}
                    />
                  </div>
                  <div className="project-table-container">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Proj-name</th>
                          <th>Start-Date</th>
                          <th>End-Date</th>
                          <th>Project-Allocation</th>
                          <th>Tech-Stack</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {projectsToDisplay.map((project, index) => (
                          <tr key={project.id}>
                            <td>{project.proj_name}</td>
                            <td>{project.start_date}</td>
                            <td>{project.end_date}</td>
                            <td>
                              {Object.values(project.users_alloc).join(', ')}
                            </td>
                            <td>{project.tech_stack}</td>
                            <td>
                              <button
                                className="btn-update"
                                onClick={() => toggleUpdateProject(index)}
                              >
                                Edit
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <button className="btn-add" onClick={toggleAddProjectModal}>
                    Add Project
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={isAddProjectModalOpen}
        onHide={toggleAddProjectModal}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="proj_name">
              <Form.Label>Proj-name:</Form.Label>
              <Form.Control
                type="text"
                name="proj_name"
                value={newProject.proj_name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="start_date">
              <Form.Label>Start-Date:</Form.Label>
              <Form.Control
                type="date"
                name="start_date"
                value={newProject.start_date}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="end_date">
              <Form.Label>End-Date:</Form.Label>
              <Form.Control
                type="date"
                name="end_date"
                value={newProject.end_date}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="users_alloc">
              <Form.Label>User-Alloc:</Form.Label>
              <div className="user-list user-list-scroll">
                {users.map((user) => (
                  <Form.Check
                    key={user.id}
                    type="checkbox"
                    label={user.name}
                    name={user.id.toString()} // User ID as the input name
                    checked={newProject.users_alloc[user.id] || false} // Use user ID as key
                    onChange={handleInputChange}
                  />
                ))}
              </div>
            </Form.Group>
            <Form.Group controlId="tech_stack">
              <Form.Label>Tech-Stack:</Form.Label>
              <Form.Control
                type="text"
                name="tech_stack"
                value={newProject.tech_stack}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Form>
          {!isFormValid && (
            <div className="text-danger">Please fill in all fields.</div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-add" onClick={handleSubmit}>
            Add Project
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={isUpdateProjectModalOpen}
        onHide={() => setUpdateProjectModalOpen(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="proj_name">
              <Form.Label>Proj-name:</Form.Label>
              <Form.Control
                type="text"
                name="proj_name"
                value={newProject.proj_name}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="start_date">
              <Form.Label>Start-Date:</Form.Label>
              <Form.Control
                type="date"
                name="start_date"
                value={newProject.start_date}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="end_date">
              <Form.Label>End-Date:</Form.Label>
              <Form.Control
                type="date"
                name="end_date"
                value={newProject.end_date}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="users_alloc">
              <Form.Label>User-Alloc:</Form.Label>
              <div className="user-list user-list-scroll">
                {users.map((user) => (
                  <Form.Check
                    key={user.id}
                    type="checkbox"
                    label={user.name}
                    name={user.id.toString()} // User ID as the input name
                    checked={newProject.users_alloc[user.id] || false} // Use user ID as key
                    onChange={handleInputChange}
                  />
                ))}
              </div>
            </Form.Group>
            <Form.Group controlId="tech_stack">
              <Form.Label>Tech-Stack:</Form.Label>
              <Form.Control
                type="text"
                name="tech_stack"
                value={newProject.tech_stack}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
          </Form>
          {!isFormValid && (
            <div className="text-danger">Please fill in all fields.</div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="btn-delete"
            onClick={() => handleDelete(newProject.id)}
          >
            Delete Project
          </Button>
          <Button className="btn-update" onClick={handleUpdate}>
            Update Project
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ProjectAllocation;

// import React, { useState } from 'react';
// import '../../Styles/Admin/ProjectAllocation.css';
// import { Button, Modal, Form } from 'react-bootstrap';

// function ProjectAllocation() {
//   const [activeAccordion, setActiveAccordion] = useState(null);
//   const [projectData, setProjectData] = useState([
//     {
//       id: 1,
//       proj_name: 'Project A',
//       start_date: '2023-01-15',
//       end_date: '2023-06-30',
//       users_alloc: ['John Doe'],
//       tech_stack: 'React, Node.js',
//     },
//     {
//       id: 2,
//       proj_name: 'Project B',
//       start_date: '2023-02-10',
//       end_date: '2023-07-15',
//       users_alloc: ['Jane Smith'],
//       tech_stack: 'Angular, Java',
//     },
//     {
//       id: 3,
//       proj_name: 'Project C',
//       start_date: '2023-01-15',
//       end_date: '2023-06-30',
//       users_alloc: ['John Doe'],
//       tech_stack: 'React, Node.js',
//     },
//     {
//       id: 4,
//       proj_name: 'Project D',
//       start_date: '2023-02-10',
//       end_date: '2023-07-15',
//       users_alloc: ['Jane Smith'],
//       tech_stack: 'Angular, Java',
//     },
//     {
//       id: 5,
//       proj_name: 'Project E',
//       start_date: '2023-01-15',
//       end_date: '2023-06-30',
//       users_alloc: ['John Doe'],
//       tech_stack: 'React, Node.js',
//     },
//     {
//       id: 6,
//       proj_name: 'Project F',
//       start_date: '2023-02-10',
//       end_date: '2023-07-15',
//       users_alloc: ['Jane Smith'],
//       tech_stack: 'Angular, Java',
//     },
//     {
//       id: 7,
//       proj_name: 'Project G',
//       start_date: '2023-01-15',
//       end_date: '2023-06-30',
//       users_alloc: ['John Doe'],
//       tech_stack: 'React, Node.js',
//     },
//     {
//       id: 8,
//       proj_name: 'Project H',
//       start_date: '2023-02-10',
//       end_date: '2023-07-15',
//       users_alloc: ['Jane Smith'],
//       tech_stack: 'Angular, Java',
//     },
//     {
//       id: 9,
//       proj_name: 'Project I',
//       start_date: '2023-01-15',
//       end_date: '2023-06-30',
//       users_alloc: ['John Doe'],
//       tech_stack: 'React, Node.js',
//     },
//     {
//       id: 10,
//       proj_name: 'Project J',
//       start_date: '2023-02-10',
//       end_date: '2023-07-15',
//       users_alloc: ['Jane Smith'],
//       tech_stack: 'Angular, Java',
//     },
//     {
//       id: 11,
//       proj_name: 'Project K',
//       start_date: '2023-01-15',
//       end_date: '2023-06-30',
//       users_alloc: ['John Doe'],
//       tech_stack: 'React, Node.js',
//     },
//     {
//       id: 12,
//       proj_name: 'Project L',
//       start_date: '2023-02-10',
//       end_date: '2023-07-15',
//       users_alloc: ['Jane Smith'],
//       tech_stack: 'Angular, Java',
//     },
//     {
//       id: 13,
//       proj_name: 'Project M',
//       start_date: '2023-01-15',
//       end_date: '2023-06-30',
//       users_alloc: ['John Doe'],
//       tech_stack: 'React, Node.js',
//     },
//     {
//       id: 14,
//       proj_name: 'Project N',
//       start_date: '2023-02-10',
//       end_date: '2023-07-15',
//       users_alloc: ['Jane Smith'],
//       tech_stack: 'Angular, Java',
//     },
//     {
//       id: 15,
//       proj_name: 'Project O',
//       start_date: '2023-01-15',
//       end_date: '2023-06-30',
//       users_alloc: ['John Doe'],
//       tech_stack: 'React, Node.js',
//     },
//     {
//       id: 16,
//       proj_name: 'Project P',
//       start_date: '2023-02-10',
//       end_date: '2023-07-15',
//       users_alloc: ['Jane Smith'],
//       tech_stack: 'Angular, Java',
//     },

    
//   ]);
//   const [isAddProjectModalOpen, setAddProjectModalOpen] = useState(false);
//   const [isUpdateProjectModalOpen, setUpdateProjectModalOpen] = useState(false);
//   const [newProject, setNewProject] = useState({
//     id: '',
//     proj_name: '',
//     start_date: '',
//     end_date: '',
//     users_alloc: [],
//     tech_stack: '',
//   });
//   const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
//   const [isFormValid, setFormValid] = useState(true);
//   const [users] = useState([
//     { id: 1, name: 'John Doe' },
//     { id: 2, name: 'Jane' },
//     { id: 3, name: 'Alice Johnson' },
//     { id: 4, name: 'rio' },
//     { id: 5, name: 'Jane Smith' },
//     { id: 6, name: 'Johnson' },
//     { id: 7, name: 'Tokyo' },
//     { id: 8, name: 'Jack Smith' },
//     { id: 9, name: 'leo ' },
//     { id: 10, name: 'Doe' },
//     { id: 11, name: 'Jan' },
//     { id: 12, name: 'eon' },
//     { id: 13, name: 'ram' },
//     { id: 14, name: 'dsd' },
//     { id: 15, name: 'fdh' },
//     { id: 16, name: 'Vin Diesel' },
//     { id: 17, name: 'Smith' },
//     { id: 19, name: 'rolex' },


//   ]);

//   const handleAccordionClick = (accordionId) => {
//     setActiveAccordion((prevAccordion) =>
//       prevAccordion === accordionId ? null : accordionId
//     );
//   };

//   // Function to toggle the Add Project modal
//   const toggleAddProjectModal = () => {
//     setNewProject({
//       id: '',
//       proj_name: '',
//       start_date: '',
//       end_date: '',
//       users_alloc: [], // Array of user names
//       tech_stack: '',
//     });
//     setAddProjectModalOpen((prevIsOpen) => !prevIsOpen);
//   };

//   // Function to toggle the Update Project form modal
//   const toggleUpdateProject = (index) => {
//     setSelectedProjectIndex(index);
//     setNewProject(projectData[index]); // Initialize the form with the data of the selected project
//     setUpdateProjectModalOpen((prevIsOpen) => !prevIsOpen);
//   };

//   // Function to handle input changes in the Add/Update Project form
//   const handleInputChange = (event) => {
//     const { name, value, type } = event.target;
//     if (type === 'checkbox') {
//       const isChecked = event.target.checked;
//       const userName = event.target.name; // User name
//       const updatedUsersAlloc = isChecked
//         ? [...newProject.users_alloc, userName]
//         : newProject.users_alloc.filter((name) => name !== userName);
//       setNewProject((prevNewProject) => ({
//         ...prevNewProject,
//         users_alloc: updatedUsersAlloc,
//       }));
//     } else {
//       setNewProject((prevNewProject) => ({
//         ...prevNewProject,
//         [name]: value,
//       }));
//     }
//   };

//   // Function to handle form submission for adding a new project
//   const handleSubmit = () => {
//     // Check if all required fields are filled
//     const isFormValid =
//       newProject.proj_name.trim() !== '' &&
//       newProject.start_date.trim() !== '' &&
//       newProject.end_date.trim() !== '' &&
//       newProject.users_alloc.length > 0 && // At least one user selected
//       newProject.tech_stack.trim() !== '';

//     // Update isFormValid state based on form validity
//     setFormValid(isFormValid);

//     if (isFormValid) {
//       setProjectData((prevProjectData) => [...prevProjectData, newProject]);
//       // Clear the form fields
//       setNewProject({
//         id: '',
//         proj_name: '',
//         start_date: '',
//         end_date: '',
//         users_alloc: [], // Array of user names
//         tech_stack: '',
//       });
//       setAddProjectModalOpen(false);

//       // Log new project data to console
//       console.log('New Project:', newProject);
//     }
//   };

//   // Function to handle form submission for updating a project
//   const handleUpdate = () => {
//     // Check if all required fields are filled
//     const isFormValid =
//       newProject.proj_name.trim() !== '' &&
//       newProject.start_date.trim() !== '' &&
//       newProject.end_date.trim() !== '' &&
//       newProject.users_alloc.length > 0 && // At least one user selected
//       newProject.tech_stack.trim() !== '';

//     // Update isFormValid state based on form validity
//     setFormValid(isFormValid);

//     if (isFormValid) {
//       const updatedProjectData = [...projectData];
//       updatedProjectData[selectedProjectIndex] = newProject;
//       setProjectData(updatedProjectData);
//       setNewProject({
//         id: '',
//         proj_name: '',
//         start_date: '',
//         end_date: '',
//         users_alloc: [], // Array of user names
//         tech_stack: '',
//       });
//       setUpdateProjectModalOpen(false);

//       // Log updated project data to console
//       console.log('Updated Project:', newProject);
//     }
//   };

//   // Function to handle form submission for deleting a project
//   const handleDelete = (projectId) => {
//     const updatedProjectData = projectData.filter(
//       (project) => project.id !== projectId
//     );
//     setProjectData(updatedProjectData);
//     setUpdateProjectModalOpen(false);

//     // Log the ID of the deleted project
//     console.log('Project deleted, ID:', projectId);
//   };


//   const [searchInput, setSearchInput] = useState('');

//   // Function to handle changes in the search input
//   const handleSearchInputChange = (event) => {
//     setSearchInput(event.target.value);
//   };

//   // Filter users based on the search input
//   const filteredProjects = projectData.filter((project) => {
//     const projName = `${project.proj_name} `.toLowerCase();
//     return projName.includes(searchInput.toLowerCase());
//   });

//   // Add a variable to hold the users to be displayed
//   const projectsToDisplay = searchInput.trim() === '' ? projectData : filteredProjects;


//   return (
//     <div className="project-allocation-container">
//       <div className="accordion project-accordion-item" id="projectAccordion">
//         <div className="accordion-item">
//           <h2 className="accordion-header" id="projects">
//             <button
//               className={`accordion-button accordion-button-custom ${activeAccordion === 'projects' ? '' : 'collapsed'
//                 }`}
//               type="button"
//               onClick={() => handleAccordionClick('projects')}
//             >
//               Projects
//             </button>
//           </h2>
//           <div
//             id="collapseProjects"
//             className={`accordion-collapse collapse ${activeAccordion === 'projects' ? 'show' : ''
//               }`}
//             aria-labelledby="projects"
//             data-bs-parent="#projectAccordion"
//           >
//             <div className="accordion-body">
//               {activeAccordion === 'projects' && (
//                 <>
//                   <div className="search-bar">
//                     <input
//                       type="text"
//                       placeholder="Search by Project-name..."
//                       value={searchInput}
//                       onChange={handleSearchInputChange}
//                     />
//                   </div>
//                   <div className='project-table-container'>
//                     <table className="table">
//                       <thead>
//                         <tr>
//                           <th>Proj-name</th>
//                           <th>Start-Date</th>
//                           <th>End-Date</th>
//                           <th>Project-Allocation</th>
//                           <th>Tech-Stack</th>
//                           <th>Actions</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {projectsToDisplay.map((project, index) => (
//                           <tr key={project.id}>
//                             <td>{project.proj_name}</td>
//                             <td>{project.start_date}</td>
//                             <td>{project.end_date}</td>
//                             <td>{project.users_alloc.join(', ')}</td> {/* Display user names */}
//                             <td>{project.tech_stack}</td>
//                             <td>
//                               <button
//                                 className="btn-update"
//                                 onClick={() => toggleUpdateProject(index)}
//                               >
//                                 Edit
//                               </button>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </table>
//                   </div>
//                   <button
//                     className=" btn-add "
//                     onClick={toggleAddProjectModal}
//                   >
//                     Add Project
//                   </button>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Add Project Modal */}
//       <Modal
//         show={isAddProjectModalOpen}
//         onHide={toggleAddProjectModal}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Add Project</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="proj_name">
//               <Form.Label>Proj-name:</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="proj_name"
//                 value={newProject.proj_name}
//                 onChange={handleInputChange}
//                 required
//               />
//             </Form.Group>
//             <Form.Group controlId="start_date">
//               <Form.Label>Start-Date:</Form.Label>
//               <Form.Control
//                 type="date"
//                 name="start_date"
//                 value={newProject.start_date}
//                 onChange={handleInputChange}
//                 required
//               />
//             </Form.Group>
//             <Form.Group controlId="end_date">
//               <Form.Label>End-Date:</Form.Label>
//               <Form.Control
//                 type="date"
//                 name="end_date"
//                 value={newProject.end_date}
//                 onChange={handleInputChange}
//                 required
//               />
//             </Form.Group>
//             <Form.Group controlId="users_alloc">
//               <Form.Label>User-Alloc:</Form.Label>
//               <div className="user-list user-list-scroll">
//                 {users.map((user) => (
//                   <Form.Check
//                     key={user.id}
//                     type="checkbox"
//                     label={user.name}
//                     name={user.name} // User name as the input name
//                     checked={newProject.users_alloc.includes(user.name)}
//                     onChange={handleInputChange}
//                   />
//                 ))}
//               </div>
//             </Form.Group>
//             <Form.Group controlId="tech_stack">
//               <Form.Label>Tech-Stack:</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="tech_stack"
//                 value={newProject.tech_stack}
//                 onChange={handleInputChange}
//                 required
//               />
//             </Form.Group>
//           </Form>
//           {!isFormValid && (
//             <div className="text-danger">Please fill in all fields.</div>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button className="btn-add" onClick={handleSubmit}>
//             Add Project
//           </Button>
//         </Modal.Footer>
//       </Modal>

//       {/* Update Project Modal */}
//       <Modal
//         show={isUpdateProjectModalOpen}
//         onHide={() => setUpdateProjectModalOpen(false)}
//         backdrop="static"
//         keyboard={false}
//       >
//         <Modal.Header closeButton>
//           <Modal.Title>Update Project</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <Form.Group controlId="proj_name">
//               <Form.Label>Proj-name:</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="proj_name"
//                 value={newProject.proj_name}
//                 onChange={handleInputChange}
//                 required
//               />
//             </Form.Group>
//             <Form.Group controlId="start_date">
//               <Form.Label>Start-Date:</Form.Label>
//               <Form.Control
//                 type="date"
//                 name="start_date"
//                 value={newProject.start_date}
//                 onChange={handleInputChange}
//                 required
//               />
//             </Form.Group>
//             <Form.Group controlId="end_date">
//               <Form.Label>End-Date:</Form.Label>
//               <Form.Control
//                 type="date"
//                 name="end_date"
//                 value={newProject.end_date}
//                 onChange={handleInputChange}
//                 required
//               />
//             </Form.Group>
//             <Form.Group controlId="users_alloc">
//               <Form.Label>User-Alloc:</Form.Label>
//               <div className="user-list user-list-scroll">
//                 {users.map((user) => (
//                   <Form.Check
//                     key={user.id}
//                     type="checkbox"
//                     label={user.name}
//                     name={user.name} // User name as the input name
//                     checked={newProject.users_alloc.includes(user.name)}
//                     onChange={handleInputChange}
//                   />
//                 ))}
//               </div>
//             </Form.Group>
//             <Form.Group controlId="tech_stack">
//               <Form.Label>Tech-Stack:</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="tech_stack"
//                 value={newProject.tech_stack}
//                 onChange={handleInputChange}
//                 required
//               />
//             </Form.Group>
//           </Form>
//           {!isFormValid && (
//             <div className="text-danger">Please fill in all fields.</div>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button
//             className="btn-delete"
//             onClick={() => handleDelete(newProject.id)}
//           >
//             Delete Project
//           </Button>
//           <Button className="btn-update" onClick={handleUpdate}>
//             Update Project
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default ProjectAllocation;