/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Page from './Page';
import Button from '../components/Button';
import Link from '../components/Link';

const LogoElement = ({color, logoKind, language, src}) => {

  const fileTypes = ['.svg', '.png', '@4x.png','@8x.png'];
	const backgroundColor = color === 'white' ? '#CCCCCC' : '#FFFFFF';
	return (
		<div style={{display: 'inline-block', width: '25%'}}>
			<img
				alt="WFP Logo"
				style={{border: '3px solid #CCCCCC',backgroundColor: backgroundColor}}
				src={`${src}.svg`} />
				<br/>
				{fileTypes.map(fileType =>
					<span>
						<Button
							small
							kind="ghost"
							target="_blank"
							href={`${src}${fileType}`}>
							{fileType}
						</Button>&nbsp;
					</span>
				)}

		</div>
	)
};

storiesOf('> Documentation', module)
.addWithInfo(
  'Favicons',
  ``,
  () => {
    const logoKinds = ['emblem', 'extended', 'standard', 'vertical'];
    const colors = ['blue', 'black', 'white'];
    const languages = ['en', 'es', 'fr', 'ar'];

    const colorList = logoKinds.map((logoKind) =>
     <li style={{marginBottom: '1em'}}>
      <div style={{ marginBottom: '1em', backgroundColor: logoKind.hex}}></div>
      <h2>{logoKind}</h2>
			{colors.map(color => {
				return (
					<div>
						<h3>{color}</h3>
						<div>
							{logoKind === 'emblem' ? (
								<LogoElement
									color={color}
									src={`http://localhost:9000/logos/${logoKind}/wfp-logo-${logoKind}-${color}`} />
							) : (
								<div>
									{languages.map(language =>
										<LogoElement
											color={color}
											src={`http://localhost:9000/logos/${logoKind}/${language}/wfp-logo-${logoKind}-${color}-${language}`} />
									)}
								</div>
							)}
						</div>
					</div>
				)
			})}
    </li>
	);
  return (
    <Page title="Logos" subTitle="The new Logos in various sizes">

      <p>The visual identity includes a palette of ten complementary colours that can be used with the logo in communications products. Please do not use any other colours. The palette can, however, be extended by using different hues of these colours.

      The color reference codes are shown below.</p>
      
      <p>You can find the extended Colour Palette <Link href="http://brand.manuals.wfp.org/en/core-elements/colours/colour-palette/">here</Link>.</p>


      <ul>
        {colorList}
      </ul>
    </Page>
  )
}
);
