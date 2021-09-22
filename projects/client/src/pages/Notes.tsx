import React, { FunctionComponent, useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import NoteCard from '../components/NoteCard';
interface NotesProps {}

export interface Note {
  id: string;
  title: string;
  description: string;
}

const Notes: FunctionComponent<NotesProps> = () => {
  const [notes, setNotes] = useState<Note[]>();

  useEffect(() => {
    fetch('http://localhost:8888/notes')
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  return (
    <Grid container spacing={2}>

      {notes &&
        notes.map((note) => {
          return (
            <Grid item key={note.id} xs={12} sm={6} lg={4}>
              <NoteCard note={note} />
            </Grid>
          );
        })}
    </Grid>
  );
};

export default Notes;
