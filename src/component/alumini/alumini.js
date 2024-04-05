import React, { useState, useEffect, useRef } from 'react';
import './alumini.css';
import Navbar from '../navbar/navbar';
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';
import { Document, Page, View, Text, StyleSheet, Font } from '@react-pdf/renderer';
import { useReactToPrint } from 'react-to-print';

Font.register({
  family: 'Roboto',
  src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf',
});

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontFamily: 'Roboto',
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
  },
  table: {
    display: 'table',
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCellHeader: {
    width: '20%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
    padding: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tableCell: {
    width: '20%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
    padding: 5,
    textAlign: 'center',
  },
});

const PDFContent = ({ todos }) => {
  return (
    <Document>
      <Page style={styles.page}>
        <Text style={styles.heading}>Alumni Details</Text>
        <View style={styles.table}>
          {/* Table Header */}
          <View style={styles.tableRow}>
            <View style={styles.tableCellHeader}>
              <Text>Name</Text>
            </View>
            <View style={styles.tableCellHeader}>
              <Text>company</Text>
            </View>
            <View style={styles.tableCellHeader}>
              <Text>CTC</Text>
            </View>
            <View style={styles.tableCellHeader}>
              <Text>Department</Text>
            </View>
            <View style={styles.tableCellHeader}>
              <Text>Year</Text>
            </View>
            <View style={styles.tableCellHeader}>
              <Text>Remarks</Text>
            </View>
          </View>

          {/* Table Body */}
          {todos.map((todo, index) => (
            <View key={index} style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text>{todo.title}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>{todo.name}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>{todo.time}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>{todo.age}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>{todo.words}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text>{todo.marks}</Text>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

const Alumini = () => {
  const [todos, setTodos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredTodos = todos.filter((todo) =>
    todo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className="ulis">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search by company name"
        />

        {/* Add the PDF download link */}
        <PDFDownloadLink
          document={<PDFContent todos={filteredTodos} />}
          fileName="alumni_details.pdf"
        >
          {({ blob, url, loading, error }) =>
            loading ? 'Loading...' : 'Download PDF'
          }
        </PDFDownloadLink>

        {/* Ref for the PrintableContent component */}
        <div style={{ display: 'none' }}>
          <PDFViewer>
            <PDFContent todos={filteredTodos} />
          </PDFViewer>
        </div>

        <ul>
          {filteredTodos.map((todo, index) => (
            <li key={index}>
              <div className="displaydata">
                <p>{todo.title}</p>
                <p>{todo.name}</p>
                <p>{todo.time}</p>
                <p>{todo.age}</p>
                <p>{todo.words}</p>
                <p>{todo.marks}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Alumini;
