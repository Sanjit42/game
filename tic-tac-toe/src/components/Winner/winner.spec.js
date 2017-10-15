import React from 'react';
import { expect } from 'chai';
import CalculateWinner from './winner'

describe('CalculateWinner Winner', () => {
    it('should return winner name if criteria is match', () => {
        const line = ["X", "O", "X", "O", "X", "O", "O", "X", "X"];
        expect(CalculateWinner(line)).to.equal("X")
    });

    it('should return null if criteria is not matched', () => {
        const line = ["X", "O", "X","X", "X", "O", "O", "X", "0"];
        expect(CalculateWinner(line)).to.equal(null)
    });
});