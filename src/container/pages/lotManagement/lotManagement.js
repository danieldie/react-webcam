import React, { useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col} from 'antd';
import { Card } from 'antd';
import { DashboardFilterBanner } from '../../../components/banners/Banners';
import { Main } from '../SalesSearch/Style';
import SearchTable from '../../../components/table/SearchTable';

function LotManagement() {

    const dispatch = useDispatch();
    const SearchValue = useSelector((state) => state.search.data);

    useEffect(() => {
        console.log("SearchValue", SearchValue);
    }, [SearchValue]);

    return (
        <>
            <Main>
                <Row gutter={25}>
                    <Col xs={24}>
                        <Card>
                            <DashboardFilterBanner />
                        </Card>
                    </Col>
                </Row>
                <Row gutter={25}>
                    <Col xs={24}>
                        <Card>
                            <SearchTable type={'lotTable'} title={'Lot'} SearchData={SearchValue} />
                        </Card>
                    </Col>  
                </Row>
            </Main>
        </>
    );
}

export default LotManagement;
