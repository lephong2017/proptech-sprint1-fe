import React, { Component } from "react";
import clone from "clone";
import { Row, Col } from "antd";
import LayoutWrapper from "components/utility/layoutWrapper.js";
import basicStyle from "settings/basicStyle";
import IsoWidgetsWrapper from "./widgets-wrapper";
import IsoWidgetBox from "./widget-box";
import CardWidget from "./card/card-widgets";
import ProgressWidget from "./progress/progress-widget";
import SingleProgressWidget from "./progress/progress-single";
import ReportsWidget from "./report/report-widget";
import StickerWidget from "./sticker/sticker-widget";
import SaleWidget from "./sale/sale-widget";
import { TableViews, tableinfos, dataList } from "containers/Tables/antTables";
import * as rechartConfigs from "containers/Charts/recharts/config";
import { StackedAreaChart } from "containers/Charts/recharts/charts/";
import IntlMessages from "components/utility/intlMessages";

const tableDataList = clone(dataList);
tableDataList.size = 5;

export default class extends Component {
  render() {
    const { rowStyle, colStyle } = basicStyle;
    const wisgetPageStyle = {
      display: "flex",
      flexFlow: "row wrap",
      alignItems: "flex-start",
      overflow: "hidden"
    };

    const stackConfig = {
      ...rechartConfigs.StackedAreaChart,
      width: window.innerWidth < 450 ? 300 : 500
    };
    return (
      <LayoutWrapper>
        <div style={wisgetPageStyle}>
          <Row style={rowStyle} gutter={0} justify="start">
            <Col md={8} sm={24} xs={24} style={colStyle}>
              <IsoWidgetsWrapper>
                {/* Report Widget */}
                <ReportsWidget
                  label="adfasf"
                  details={<IntlMessages id="widget.reportswidget.details" />}
                  children ="Subtitle"
                >
                  <SingleProgressWidget
                    label={
                      <IntlMessages id="widget.singleprogresswidget1.label" />
                    }
                    percent={70}
                    barHeight={7}
                    status="active"
                    info={true} // Boolean: true, false
                  />
                  <SingleProgressWidget
                    label={
                      <IntlMessages id="widget.singleprogresswidget2.label" />
                    }
                    percent={80}
                    barHeight={7}
                    status="active"
                    info={true} // Boolean: true, false
                  />
                  <SingleProgressWidget
                    label={
                      <IntlMessages id="widget.singleprogresswidget3.label" />
                    }
                    percent={40}
                    barHeight={7}
                    status="active"
                    info={true} // Boolean: true, false
                  />
                  <SingleProgressWidget
                    label={
                      <IntlMessages id="widget.singleprogresswidget4.label" />
                    }
                    percent={60}
                    barHeight={7}
                    status="active"
                    info={true} // Boolean: true, false
                  />
                </ReportsWidget>
              </IsoWidgetsWrapper>
            </Col>

            <Col md={16} sm={24} xs={24} style={colStyle}>
              <IsoWidgetsWrapper>
                <IsoWidgetBox>
                  {/* TABLE */}
                  <TableViews.SimpleView
                    tableInfo={tableinfos[0]}
                    dataList={tableDataList}
                  />
                </IsoWidgetBox>
              </IsoWidgetsWrapper>
            </Col>
          </Row>

          <Row style={rowStyle} gutter={0} justify="start">
            <Col lg={6} md={12} sm={12} xs={24} style={colStyle}>
              <IsoWidgetsWrapper>
                {/* Sticker Widget */}
                <StickerWidget
                  number={<IntlMessages id="widget.stickerwidget1.number" />}
                  text={<IntlMessages id="widget.stickerwidget1.text" />}
                  icon="ion-email-unread"
                  fontColor="#ffffff"
                  bgColor="#7266BA"
                />
              </IsoWidgetsWrapper>
            </Col>

            <Col lg={6} md={12} sm={12} xs={24} style={colStyle}>
              <IsoWidgetsWrapper>
                {/* Sticker Widget */}
                <StickerWidget
                  number={<IntlMessages id="widget.stickerwidget1.number" />}
                  text={<IntlMessages id="widget.stickerwidget2.text" />}
                  icon="ion-android-camera"
                  fontColor="#ffffff"
                  bgColor="#42A5F6"
                />
              </IsoWidgetsWrapper>
            </Col>

            <Col lg={6} md={12} sm={12} xs={24} style={colStyle}>
              <IsoWidgetsWrapper>
                {/* Sticker Widget */}
                <StickerWidget
                  number={<IntlMessages id="widget.stickerwidget1.number" />}
                  text={<IntlMessages id="widget.stickerwidget3.text" />}
                  icon="ion-chatbubbles"
                  fontColor="#ffffff"
                  bgColor="#7ED320"
                />
              </IsoWidgetsWrapper>
            </Col>

            <Col lg={6} md={12} sm={12} xs={24} style={colStyle}>
              <IsoWidgetsWrapper>
                {/* Sticker Widget */}
                <StickerWidget
                  number={<IntlMessages id="widget.stickerwidget1.number" />}
                  text={<IntlMessages id="widget.stickerwidget4.text" />}
                  icon="ion-android-cart"
                  fontColor="#ffffff"
                  bgColor="#F75D81"
                />
              </IsoWidgetsWrapper>
            </Col>
          </Row>

          <Row style={rowStyle} gutter={0} justify="start">
            <Col lg={6} md={12} sm={12} xs={24} style={colStyle}>
              <IsoWidgetsWrapper>
                {/* Sale Widget */}
                <SaleWidget
                  label={<IntlMessages id="widget.salewidget1.label" />}
                  price={<IntlMessages id="widget.salewidget1.price" />}
                  details={<IntlMessages id="widget.salewidget1.details" />}
                  fontColor="#F75D81"
                />
              </IsoWidgetsWrapper>
            </Col>

            <Col lg={6} md={12} sm={12} xs={24} style={colStyle}>
              <IsoWidgetsWrapper>
                {/* Sale Widget */}
                <SaleWidget
                  label={<IntlMessages id="widget.salewidget2.label" />}
                  price={<IntlMessages id="widget.salewidget2.price" />}
                  details={<IntlMessages id="widget.salewidget2.details" />}
                  fontColor="#F75D81"
                />
              </IsoWidgetsWrapper>
            </Col>

            <Col lg={6} md={12} sm={12} xs={24} style={colStyle}>
              <IsoWidgetsWrapper>
                {/* Sale Widget */}
                <SaleWidget
                  label={<IntlMessages id="widget.salewidget3.label" />}
                  price={<IntlMessages id="widget.salewidget3.price" />}
                  details={<IntlMessages id="widget.salewidget3.details" />}
                  fontColor="#F75D81"
                />
              </IsoWidgetsWrapper>
            </Col>

            <Col lg={6} md={12} sm={12} xs={24} style={colStyle}>
              <IsoWidgetsWrapper>
                {/* Sale Widget */}
                <SaleWidget
                  label={<IntlMessages id="widget.salewidget4.label" />}
                  price={<IntlMessages id="widget.salewidget4.price" />}
                  details={<IntlMessages id="widget.salewidget4.details" />}
                  fontColor="#F75D81"
                />
              </IsoWidgetsWrapper>
            </Col>
          </Row>

          <Row style={rowStyle} gutter={0} justify="start">
            <Col lg={6} md={12} sm={12} xs={24} style={colStyle}>
              <IsoWidgetsWrapper gutterBottom={20}>
                {/* Card Widget */}
                <CardWidget
                  icon="ion-android-chat"
                  iconcolor="#42A5F5"
                  number={<IntlMessages id="widget.cardwidget1.number" />}
                  text={<IntlMessages id="widget.cardwidget1.text" />}
                />
              </IsoWidgetsWrapper>

              <IsoWidgetsWrapper gutterBottom={20}>
                {/* Card Widget */}
                <CardWidget
                  icon="ion-music-note"
                  iconcolor="#F75D81"
                  number={<IntlMessages id="widget.cardwidget2.number" />}
                  text={<IntlMessages id="widget.cardwidget2.text" />}
                />
              </IsoWidgetsWrapper>

              <IsoWidgetsWrapper>
                {/* Card Widget */}
                <CardWidget
                  icon="ion-trophy"
                  iconcolor="#FEAC01"
                  number={<IntlMessages id="widget.cardwidget3.number" />}
                  text={<IntlMessages id="widget.cardwidget3.text" />}
                />
              </IsoWidgetsWrapper>
            </Col>

            <Col lg={6} md={12} sm={12} xs={24} style={colStyle}>
              <IsoWidgetsWrapper gutterBottom={20}>
                {/* Progress Widget */}
                <ProgressWidget
                  label={<IntlMessages id="widget.progresswidget1.label" />}
                  details={<IntlMessages id="widget.progresswidget1.details" />}
                  icon="ion-archive"
                  iconcolor="#4482FF"
                  percent={50}
                  barHeight={7}
                  status="active"
                />
              </IsoWidgetsWrapper>

              <IsoWidgetsWrapper gutterBottom={20}>
                {/* Progress Widget */}
                <ProgressWidget
                  label={<IntlMessages id="widget.progresswidget2.label" />}
                  details={<IntlMessages id="widget.progresswidget2.details" />}
                  icon="ion-pie-graph"
                  iconcolor="#F75D81"
                  percent={80}
                  barHeight={7}
                  status="active"
                />
              </IsoWidgetsWrapper>

              <IsoWidgetsWrapper>
                {/* Progress Widget */}
                <ProgressWidget
                  label={<IntlMessages id="widget.progresswidget3.label" />}
                  details={<IntlMessages id="widget.progresswidget3.details" />}
                  icon="ion-android-download"
                  iconcolor="#494982"
                  percent={65}
                  barHeight={7}
                  status="active"
                />
              </IsoWidgetsWrapper>
            </Col>

            <Col lg={12} md={24} sm={24} xs={24} style={colStyle}>
              <IsoWidgetsWrapper>
                <IsoWidgetBox height={455}>
                  <StackedAreaChart {...stackConfig} />
                </IsoWidgetBox>
              </IsoWidgetsWrapper>
            </Col>
          </Row>
        </div>
      </LayoutWrapper>
    );
  }
}
