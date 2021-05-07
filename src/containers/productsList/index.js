import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getProducts } from '../../actions/productActions';
import { Spinner } from '../../components/common/index';
import ItemTable from '../../components/itemTable';

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
                        <Spinner size={30} width={7} />
                    </SpinnerWrapper>
                ) : (
                    <ItemTable products={products} />
                )}
            </Ctr>
        </Appjs>
    );
};

export default ProductList;
