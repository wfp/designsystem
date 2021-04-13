import React from 'react';
import { Module, ModuleBody } from '../../components/Module';

const files = [
  { filename: 'carrot-with-background' },
  { filename: 'carrot' },
  { filename: 'coffee-beans-with-background' },
  { filename: 'coffee-bean' },
  { filename: 'corn-bag-with-background' },
  { filename: 'corn-bag' },
  { filename: 'corn-bag-with-background' },
  { filename: 'corn' },
  { filename: 'eggs-can-with-background' },
  { filename: 'eggs' },
  { filename: 'milk-with-background' },
  { filename: 'milk' },
  { filename: 'moving-van-with-background' },
  { filename: 'moving-van' },
  { filename: 'notebook-with-background' },
  { filename: 'notebook' },
  { filename: 'pumpkin-can-with-background' },
  { filename: 'pumpkin' },
  { filename: 'rice-with-background' },
  { filename: 'rice' },
  { filename: 'sorghum-with-background' },
  { filename: 'sorghum' },
  { filename: 'soy-bean-can-with-background' },
  { filename: 'soy-bean' },
  { filename: 'watering-can-with-background' },
  { filename: 'watering-can' },
  { filename: 'wheat-with-background' },
  { filename: 'wheat' },
];

export default function Illustrations() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', margin: '0 -1rem' }}>
      {files.map((e) => (
        <Module
          light
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '50%',
          }}>
          <ModuleBody>
            <a
              href={`${process.env.STORYBOOK_INTERNAL_ASSETS}illustrations/${e.filename}.svg`}
              target="_blank"
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '300px',
              }}>
              <img
                alt={e.filename}
                style={{ width: '80%', height: '200px', objectFit: 'contain' }}
                src={`${process.env.STORYBOOK_INTERNAL_ASSETS}illustrations/${e.filename}.svg`}
              />
            </a>
          </ModuleBody>
        </Module>
      ))}
    </div>
  );
}
