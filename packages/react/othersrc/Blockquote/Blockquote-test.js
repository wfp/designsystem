import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import Blockquote from '../Blockquote';
import { cleanup, render, screen } from '@testing-library/react';

describe('Blockquote', () => {
  afterEach(cleanup);
  describe('Renders common props as expected', () => {
    
    it('Renders children as expected', () => {
      render(
        <Blockquote>Lorem Ipsum</Blockquote>
      );
      expect(screen.getByText('Lorem Ipsum')).toBeInTheDocument();
    });

    it('Should render correct className', () => {
      render(
        <Blockquote className="extra-class">Lorem Ipsum</Blockquote>
      );
      expect(screen.getByText('Lorem Ipsum')).toHaveClass('wfp--blockquote__inside');
    });

    it('Should add extra classes via className', () => {
      render(
        <Blockquote testid="blockquote" className="extra-class">Lorem Ipsum</Blockquote>
      );
      expect(screen.getByTestId('blockquote')).toHaveClass('extra-class');
    });

    it('renders correct className light prop is applied', () => {
      render(
        <Blockquote testid="blockquote" light>Lorem Ipsum</Blockquote>
      );
      expect(screen.getByTestId('blockquote')).toHaveClass('wfp--blockquote--light');
    });

    it('renders correct className warning prop is applied', () => {
      render(
        <Blockquote testid="blockquote" kind="warning">Lorem Ipsum</Blockquote>
      );
      expect(screen.getByTestId('blockquote')).toHaveClass('wfp--blockquote--warning');
    });

    it('renders correct className success prop is applied', () => {
      render(
        <Blockquote testid="blockquote" kind="success">Lorem Ipsum</Blockquote>
      );
      expect(screen.getByTestId('blockquote')).toHaveClass('wfp--blockquote--success');
    });

    it('renders correct className error prop is applied', () => {
      render(
        <Blockquote testid="blockquote" kind="error">Lorem Ipsum</Blockquote>
      );
      expect(screen.getByTestId('blockquote')).toHaveClass('wfp--blockquote--error');
    });

    it('renders correct className when withIcon prop is applied', () => {
      render(
        <Blockquote testid="blockquote" kind="warning" withIcon >Lorem Ipsum</Blockquote>
      );
      expect(screen.getByTestId('blockquote')).toHaveClass('wfp--blockquote--with-icon');
    });

    it('renders correct className when toggleable prop is applied', () => {
      render(
        <Blockquote testid="blockquote" toggleable >Lorem Ipsum</Blockquote>
      );
      expect(screen.getByTestId('blockquote')).toHaveClass('wfp--blockquote--toggleable');
    });
  });
});
