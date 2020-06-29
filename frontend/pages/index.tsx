import {FC} from 'react'
import Typography from '@material-ui/core/Typography'
import {Content} from '../misc/content'
import {css} from '@emotion/core'
import Container from '@material-ui/core/Container'
import House from '../images/house.svg'
import Wave from '../images/wave.svg'
import Button from '@material-ui/core/Button'
import useTheme from '@material-ui/core/styles/useTheme'
import Fab from '@material-ui/core/Fab'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import LinkSmoothScroll from '../utility/LinkSmoothScroll'
import {PageTitle} from '../components/pages/index/PageTitle'
import Grid from '@material-ui/core/Grid'

const HomePage: FC = () => {
	const theme = useTheme()
	const styles = {
		section: css`
			height: 100vh;
			padding: 0 2%;
		`,
		hero: css`
			display: grid;
			grid-template-columns: 1fr 1fr;
			position: relative;
		`,
		heroLeft: css`
		    display: flex;
		    flex-direction: column;
		    justify-content: center;
		    align-items: center;
		`,
		heroLeftTitle: css`
		    font-family: 'Rubik', sans-serif;
		    font-weight: 500;
		    text-align: center;
		`,
		heroLeftButton: css`
			background-color: ${theme.palette.primary.main};
			border-radius: 32px;
			width: 300px;
			font-size: 30px;
			font-family: 'Montserrat', sans-serif;
			font-weight: 500;
			text-transform: none;
			line-height: 1.4;
			color: ${theme.palette.common.white};
			
			&:hover {
				background-color: ${theme.palette.primary.main};
			}
		`,
		heroLeftSubtitle: css`
		    font-weight: 300;
		    text-align: justify;
		`,
		heroRight: css`
		    display: flex;
		    justify-content: center;
		    align-items: center;
		`,
		heroRightSvg: css`
		    width: 80%;
		`,
		heroGoDownFab: css`
			position: absolute;
			bottom: ${theme.spacing(7.5)}px;
			left: 50vw;
			right: 50vw;
			* {
				box-shadow: none;
			}
		`,
		aboutLeft: css`
		    border-radius: 80px;
		    width: 100%;
		`,
		aboutRight: css`
		    padding: 0 2%;
		`,
		aboutRightTitle: css`
		    text-align: right;
		    padding-right: 2%;
		`,
		aboutRightContent: css`
		    font-weight: 200;
		    line-height: 1.2;
		    text-align: justify;
		`,
		ourEmployees: css`
		    display: flex;
		    flex-direction: column;
		    align-items: center;
		`,
		ourEmployeesEmployee: css`
			display: grid;
			grid-template-columns: 0.5fr 1fr;
			grid-column-gap: ${theme.spacing(5)}px;
			align-items: center;
			margin-top: ${theme.spacing(7.5)}px;
			
			&:first-child {
				margin-top: ${theme.spacing(3)}px;
			}
		`,
		ourEmployeesEmployeeImg: css`
			border-radius: 130px;
			object-fit: contain;
			height: 100%;
			min-height: 250px;
		`,
		ourEmployeesEmployeeDetailsTitle: css`
			font-family: 'Rubik', sans-serif;
			font-weight: 500;
		`,
		ourEmployeesEmployeeDetailsDescription: css`
		    font-weight: 300;
		    width: 400px;
		`,
	}

	return (
		<div>
			<div css={[styles.hero, styles.section]}>
				<Container maxWidth='sm' css={styles.heroLeft}>
					<Typography variant='h1' css={styles.heroLeftTitle}>
						{Content.home.welcome}
					</Typography>
					<Typography variant='h3' gutterBottom css={styles.heroLeftSubtitle}>
						{Content.home.subtitle}
					</Typography>
					<Button variant='contained' disableElevation css={styles.heroLeftButton}>
						Przejdź do wyszukiwarki
					</Button>
				</Container>
				<div css={styles.heroRight}>
					<House css={styles.heroRightSvg}/>
				</div>
				<LinkSmoothScroll href='/#o-firmie'>
					<a css={styles.heroGoDownFab}>
						<Fab>
							<KeyboardArrowDownIcon/>
						</Fab>
					</a>
				</LinkSmoothScroll>
			</div>
			<Wave/>
			<Grid container justify='center' alignItems='center' id='o-firmie'
			      css={styles.section}>
				<Grid item lg={4} md={5} xs={8}>
					<img src='https://dompp.pl/wp-content/uploads/2018/07/Projekt-domu-House-21-DomPP.pl-1.jpg'
					     alt='dom' css={styles.aboutLeft}/>
				</Grid>
				<Grid item lg={6} md={5} css={styles.aboutRight}>
					<PageTitle text='O firmie' css={styles.aboutRightTitle}/>
					<Typography variant='h3' css={styles.aboutRightContent}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras diam nulla, accumsan nec augue
						ultrices, aliquam malesuada nibh. Fusce arcu ante, blandit ut hendrerit vitae, eleifend vel
						lorem.
					</Typography>
				</Grid>
			</Grid>
			<div id='nasi-pracownicy' css={styles.ourEmployees}>
				<PageTitle text='Nasi pracownicy'/>
				<div>
					<div css={styles.ourEmployeesEmployee}>
						<img
							css={styles.ourEmployeesEmployeeImg}
							src='https://icon-library.com/images/profile-png-icon/profile-png-icon-24.jpg'
							alt="zdjęcie Jana Kowalskiego"/>
						<div>
							<Typography variant='h4' gutterBottom css={styles.ourEmployeesEmployeeDetailsTitle}>
								Jan Kowalski
							</Typography>
							<Typography variant='h4' css={styles.ourEmployeesEmployeeDetailsDescription}>
								Właściciel firmy
								<br/>
								Pośrednik nieruchomości od wielu lat
								<br/>
								Telefon: +48 123 456 789
							</Typography>
						</div>
					</div>
					<div css={styles.ourEmployeesEmployee}>
						<img
							css={styles.ourEmployeesEmployeeImg}
							src='http://localhost/IMG_2954%201.png'
							alt="zdjęcie Jana Kowalskiego"/>
						<div>
							<Typography variant='h4' gutterBottom css={styles.ourEmployeesEmployeeDetailsTitle}>
								Jan Kowalski
							</Typography>
							<Typography variant='h4' css={styles.ourEmployeesEmployeeDetailsDescription}>
								Właściciel firmy
								<br/>
								Pośrednik nieruchomości od wielu lat
							</Typography>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomePage