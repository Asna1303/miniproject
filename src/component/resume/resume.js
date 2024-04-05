import React, { useState } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import Navbar from '../navbar/navbar';
import './resume.css';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: '20px',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const ResumePDF = ({ name, phone, email, education, skills, experience, certification, projects }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>{name}</Text>
        <Text>Phone: {phone}</Text>
        <Text>Email: {email}</Text>

        <Text style={styles.section}>
          <Text>Education</Text>
          <Text>{education}</Text>
        </Text>

        <Text style={styles.section}>
          <Text>Skills</Text>
          <Text>{skills}</Text>
        </Text>

        <Text style={styles.section}>
          <Text>Experience</Text>
          <Text>{experience}</Text>
        </Text>

        <Text style={styles.section}>
          <Text>Certification</Text>
          <Text>{certification}</Text>
        </Text>

        <Text style={styles.section}>
          <Text>Projects</Text>
          <Text>{projects}</Text>
        </Text>
      </View>
    </Page>
  </Document>
);

const ResumeTemplate = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [education, setEducation] = useState('');
  const [skills, setSkills] = useState('');
  const [experience, setExperience] = useState('');
  const [certification, setCertification] = useState('');
  const [projects, setProjects] = useState('');
  const [isEditing, setIsEditing] = useState(true);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <>
      <div id="resume-template">
        <Navbar />
        <Typography variant="h4" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Phone: {phone}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Email: {email}
        </Typography>

        <Typography variant="h5" gutterBottom>
          Education
        </Typography>
        <Typography variant="body1" gutterBottom>
          {education}
        </Typography>

        <Typography variant="h5" gutterBottom>
          Skills
        </Typography>
        <Typography variant="body1" gutterBottom>
          {skills}
        </Typography>

        <Typography variant="h5" gutterBottom>
          Experience
        </Typography>
        <Typography variant="body1" gutterBottom>
          {experience}
        </Typography>

        <Typography variant="h5" gutterBottom>
          Certification
        </Typography>
        <Typography variant="body1" gutterBottom>
          {certification}
        </Typography>

        <Typography variant="h5" gutterBottom>
          Projects
        </Typography>
        <Typography variant="body1" gutterBottom>
          {projects}
        </Typography>

        {isEditing ? (
          <div style={{ marginTop: '20px' }}>
            <Button variant="contained" color="primary" onClick={handleEdit}>
              Save
            </Button>
            <PDFDownloadLink
              document={
                <ResumePDF
                  name={name}
                  phone={phone}
                  email={email}
                  education={education}
                  skills={skills}
                  experience={experience}
                  certification={certification}
                  projects={projects}
                />
              }
              fileName={`${name.replace(/\s+/g, '-')}-resume.pdf`}
            >
              {({ loading }) =>
                loading ? (
                  <Button variant="contained" color="default" style={{ marginLeft: '10px' }} disabled>
                    Generating PDF...
                  </Button>
                ) : (
                  <Button variant="contained" color="default" style={{ marginLeft: '10px' }}>
                    Download PDF
                  </Button>
                )
              }
            </PDFDownloadLink>
          </div>
        ) : (
          <Button variant="contained" color="secondary" onClick={handleEdit}>
            Edit
          </Button>
        )}
      </div>

      {isEditing && (
        <div>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
            InputProps={{
              style: { color: 'white' },
            }}
          />
          <TextField
            label="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
            margin="normal"
            InputProps={{
              style: { color: 'white' },
            }}
          />
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            InputProps={{
              style: { color: 'white' },
            }}
          />
          <TextField
            label="Education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            fullWidth
            multiline
            rows={4}
            margin="normal"
            InputProps={{
              style: { color: 'white' },
            }}
          />
          <TextField
            label="Skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            fullWidth
            multiline
            rows={4}
            margin="normal"
            InputProps={{
              style: { color: 'white' },
            }}
          />
          <TextField
            label="Experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            fullWidth
            multiline
            rows={4}
            margin="normal"
            InputProps={{
              style: { color: 'white' },
            }}
          />
          <TextField
            label="Certification"
            value={certification}
            onChange={(e) => setCertification(e.target.value)}
            fullWidth
            multiline
            rows={4}
            margin="normal"
            InputProps={{
              style: { color: 'white' },
            }}
          />
          <TextField
            label="Projects"
            value={projects}
            onChange={(e) => setProjects(e.target.value)}
            fullWidth
            multiline
            rows={4}
            margin="normal"
            InputProps={{
              style: { color: 'white' },
            }}
          />
        </div>
      )}

      {/* Add the style block to hide buttons during printing */}
      <style>
        {`
          @media print {
            .no-print {
              display: none;
            }

            /* Add spacing between headings and text when printing */
            h4, h5 {
              margin-top: 10px;
            }
          }
        `}
      </style>
    </>
  );
};

export default ResumeTemplate;
