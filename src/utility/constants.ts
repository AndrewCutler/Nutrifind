import { createStyles, makeStyles, Theme } from '@material-ui/core';

export const popoverStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        padding: theme.spacing(1),
        maxWidth: '15vw',
        backgroundColor: theme.palette.background.default
    }
}));