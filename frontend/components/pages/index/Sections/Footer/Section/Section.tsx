import {FC, ReactNode} from 'react'
import Grid, {GridProps} from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {css} from '@emotion/core'
import {useTheme} from '@material-ui/core'

interface SectionProps {
    title: string
    gridProps: GridProps
    children: ReactNode
}

export const Section: FC<SectionProps> = props => {
    const theme = useTheme()
    const styles = {
        title: css`
            font-weight: 500;
            margin-bottom: ${theme.spacing(3)}px;
        `,
    }

    return (
        <Grid item {...props.gridProps}>
            <Typography variant='h5' gutterBottom css={styles.title}>
                {props.title}
            </Typography>
            {props.children}
        </Grid>
    )
}