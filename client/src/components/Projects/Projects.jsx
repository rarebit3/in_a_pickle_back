import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Projects.css";

const Projects = () => {
    let navigate = useNavigate()

    //define the states
    const [projects, setProjects] = useState([])

    //function that makes an axios call to set the state
    const getProjects = async () => {
        const projectList = await axios.get("http://localhost:3001/data/projects")
        setProjects(projectList.data.projects)
    }

    //make the axios call on pageload
    useEffect(() => {
        getProjects()
    }, [])

    //Your on-clicks and other event listeners will go here

    if (!projects) {
        return <h1>Loading your active pickling projects!</h1>
    } else {
        return (
            <div>{/*Map your projects, ya fool! */}</div>
        )
    
    }

}

export default Projects