import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Button } from '../common';

const ContentWrapper = styled.div`
    background-color: ${(props) => props.theme.colors.secondary_background};
    display: flex;
    box-shadow: ${(props) => props.theme.boxShadow.componentShadow};
    .imageWrapper {
        width: 25%;
        max-width: 120px;
        position: relative;
        top: -80px;
    }
    .tableWrapper {
        color: ${(props) => props.theme.colors.primary_text};
        flex: 1;
        table {
            border-collapse: collapse;
            width: 100%;
        }
        td {
            padding: 20px 15px;
            font-weight: 300;
            vertical-align: middle;
            word-break: break-word;
            text-align: left;
        }
        tr {
            border-bottom: 1px solid ${(props) => props.theme.colors.border};
        }
        th {
            padding: 20px 15px;
            font-weight: 500;
            font-size: 1rem;
            line-height: 1.4;
            white-space: nowrap;
            text-align: left;
        }
    }
`;

const BtnCtr = styled.div`
    display: flex;
    align-items: center;
    margin: 0 -8px;
    height: 18px;
    font-size: 1rem;
    justify-content: center;
`;

const ItemTable = (props) => {
    const { products } = props;
    const history = useHistory();

    const pushToForm = (id) => {
        history.push(`/edit/${id}`);
    };

    return (
        <ContentWrapper>
            <div className="tableWrapper">
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Weight</th>
                        <th>Availablility</th>
                        <th>Actions</th>
                    </tr>

                    {products &&
                        products.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item && item.id ? item.id : '--'}</td>
                                    <td>{item && item.product_name ? item.product_name : '--'}</td>
                                    <td>{item && item.weight ? item.weight : '--'}</td>
                                    <td>{item && item.availability ? item.availability : '--'}</td>
                                    <td>
                                        {item && item.isEditable ? (
                                            <div>
                                                <Button
                                                    onClick={() => pushToForm(item && item.id)}
                                                    color={(props) => props.theme.colors.blue}
                                                    transparent
                                                >
                                                    <BtnCtr>Edit</BtnCtr>
                                                </Button>
                                            </div>
                                        ) : (
                                            '--'
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                </table>
            </div>
        </ContentWrapper>
    );
};

export default ItemTable;
