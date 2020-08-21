import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import Button from '../components/Button';

const FireWrapper = styled.div``;
const SearchBarFire = styled(SearchBar)``;
const ButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: 154px 154px;
    grid-auto-rows: auto;
    grid-gap: 20px;
    width: 100vw:
    margin: 16px auto 0px auto;
    justify-content: center;
`;

function Fire(props) {
    const buttonInfo = [
        {name: "Size Up", path: 'fire/size-up', icon: null},
        {name: "Building Types", path: 'fire/building-types', icon: null},
        {name: "VEIS", path: 'fire/veis', icon: null},
        {name: "Ventilation", path: 'fire/ventilation', icon: null},
        {name: "CO Levels", path: 'fire/co-levels', icon: null},
    ];
    const displayButtons = buttonInfo.map((buttonInfo, index) => (
        <Button
        key={buttonInfo + index}
        text={buttonInfo.name}
        path={buttonInfo.path}
        />
    ));
    return (
        <FireWrapper>
            <SearchBarFire />
            <ButtonsContainer>{displayButtons}</ButtonsContainer>
        </FireWrapper>
    );
}

export default Fire;