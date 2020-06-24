import {FC} from 'react'
import Typography from '@material-ui/core/Typography'
import {Content} from '../misc/content'
import {css} from '@emotion/core'
import Container from '@material-ui/core/Container'
import House from '../images/house.svg'
import Wave from '../images/wave.svg'

const HomePage: FC = () => {
	const styles = {
		hero: css`
			display: grid;
			grid-template-columns: 1fr 1fr;
			height: 100vh;
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
		`,
		heroLeftSubtitle: css`
		    font-weight: 300;
		`,
		heroRight: css`
		    display: flex;
		    justify-content: center;
		    align-items: center;
		`,
		heroRightSvg: css`
		    width: 80%;
		`,
	}

	return (
		<>
			<div css={styles.hero}>
				<Container maxWidth='sm' css={styles.heroLeft}>
					<Typography variant='h1' align='center' css={styles.heroLeftTitle}>
						{Content.home.welcome}
					</Typography>
					<Typography variant='h3' align='justify' css={styles.heroLeftSubtitle}>
						{Content.home.subtitle}
					</Typography>
				</Container>
				<div css={styles.heroRight}>
					<House css={styles.heroRightSvg}/>
				</div>
			</div>
			<Wave/>
			<div css={styles.hero} id='o-firmie'>
				<Container maxWidth='sm' css={styles.heroLeft}>
					<Typography variant='h1' align='center' css={styles.heroLeftTitle}>
						O firmie
					</Typography>
					<Typography variant='h3' align='justify' css={styles.heroLeftSubtitle}>
						{Content.home.subtitle}
					</Typography>
				</Container>
				<div css={styles.heroRight}>
					<House css={styles.heroRightSvg}/>
				</div>
			</div>
			<Wave/>
			<div css={styles.hero} id='nasi-pracownicy'>
				<Container maxWidth='sm' css={styles.heroLeft}>
					<Typography variant='h1' align='center' css={styles.heroLeftTitle}>
						Nasi pracownicy
					</Typography>
					<Typography variant='h3' align='justify' css={styles.heroLeftSubtitle}>
						{Content.home.subtitle}
					</Typography>
				</Container>
				<div css={styles.heroRight}>
					<House css={styles.heroRightSvg}/>
				</div>
			</div>
			<Wave/>
			<div css={styles.hero} id='kontakt'>
				<Container maxWidth='sm' css={styles.heroLeft}>
					<Typography variant='h1' align='center' css={styles.heroLeftTitle}>
						Kontakt
					</Typography>
					<Typography variant='h3' align='justify' css={styles.heroLeftSubtitle}>
						{Content.home.subtitle}
					</Typography>
				</Container>
				<div css={styles.heroRight}>
					<House css={styles.heroRightSvg}/>
				</div>
			</div>
		</>
	)
}

export default HomePage