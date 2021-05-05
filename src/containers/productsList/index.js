import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getProducts } from '../../actions/productActions';
import { Button, Input, Spinner } from '../../components/common/index';
import ItemTable from '../../components/itemTable';
import { COLORS } from '../../constants';

const Appjs = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
`;

const Ctr = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    //font-size: calc(10px + 2vmin);
    color: white;
    margin: 50px 0 0 0;
    width: 90%;
`;

const SearchWraper = styled.div`
    display: flex;
    width: 100%;
    .inputWrapper {
        flex: 70%;
    }
`;

const Hspacer = styled.div`
    width: 20px;
`;

const Vspacer = styled.div`
    height: ${(props) => props.height || '20px'};
`;

const SpinnerWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40vh;
`;

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products && state.products.products);
    const isLoading = useSelector((state) => state.products && state.products.isLoading);

    useEffect(() => {
        dispatch(getProducts());
    }, []);

    return (
        <Appjs>
            <Ctr>
                {isLoading ? (
                    <SpinnerWrapper>
                        <Spinner size={'30px'} width={'7px'} />
                    </SpinnerWrapper>
                ) : (
                    <ItemTable products={products} />
                )}
            </Ctr>
        </Appjs>
    );
};

export default ProductList;
