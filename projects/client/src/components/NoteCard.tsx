import React from 'react';

import { Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import { FunctionComponent } from 'react';
import { Note } from '../pages/Notes';
import { DeleteOutline } from '@mui/icons-material';

interface NoteCardProps {
  note: Note;
}
const NoteCard: FunctionComponent<NoteCardProps> = ({ note }) => {
  return (
    <Card elevation={1}>
      <CardHeader
        title={note.title}
        action={
          <IconButton aria-label='settings'>
            <DeleteOutline></DeleteOutline>
          </IconButton>
        }
      />
      <CardContent>
        <Typography variant="body2">{note.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default NoteCard;
