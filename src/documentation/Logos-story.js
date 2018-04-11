/* eslint-disable no-console */

import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../components/Button';
import Link from '../components/Link';
import Page from './Page';


const LogoElement = ({color, logoKind, language, src}) => {

  const fileTypes = ['.svg', '.png', '@4x.png','@8x.png'];
	const backgroundColor = color === 'white' ? '#CCCCCC' : '#FFFFFF';
	const width = (logoKind === 'standard'||logoKind === 'extended') ? 'auto' : 'auto';
	const height = (logoKind === 'standard'||logoKind === 'extended') ? '50px' : '90px';
	return (
		<div style={{display: 'inline-block', width: '25%'}}>
			<img
				alt="WFP Logo"
				style={{
					border: '3px solid #CCCCCC',
					backgroundColor: backgroundColor,
					width: width,
					height: height
				}}
				src={`${src}.svg`} />
				<br/>
				{fileTypes.map(fileType =>
					<span>
						<Link
							small
							style={{marginRight: '0.5em', fontSize: '0.7em'}}
							kind="ghost"
							target="_blank"
							href={`${src}${fileType}`}>
							{fileType}
						</Link>
					</span>
				)}

		</div>
	)
};

storiesOf('> Documentation', module)
.addWithInfo(
  'Logos',
  ``,
  () => {
    const logoKinds = ['standard', 'extended', 'vertical', 'emblem'];
    const colors = ['blue', 'black', 'white'];
    const languages = ['en', 'es', 'fr', 'ar'];

    const colorList = logoKinds.map((logoKind) =>
     <li style={{marginBottom: '1em'}}>
      <div style={{ marginBottom: '1em', backgroundColor: logoKind.hex}}></div>
      <h2 className="before--img">{logoKind}</h2>
			{colors.map(color => {
				return (
					<div>
						<h4>{color}</h4>
						<div>
							{logoKind === 'emblem' ? (
								<LogoElement
									color={color}
									logoKind={logoKind}
									src={`http://localhost:9000/logos/${logoKind}/wfp-logo-${logoKind}-${color}`} />
							) : (
								<div>
									{languages.map(language =>
										<LogoElement
											color={color}
											logoKind={logoKind}
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
      <p>WFP's logo is available in three versions: emblem, standard, and full. Each has its own purpose and should be used appropriately, as per official branding guidelines, depending on available screen space and target audience.</p>
      <p>You can find extended information about the Logo <Link href="http://brand.manuals.wfp.org/en/core-elements/logo/emblem-restyling-2018/">here</Link>.</p>
      <ul>
        {colorList}
      </ul>
    </Page>
  )
}
);
