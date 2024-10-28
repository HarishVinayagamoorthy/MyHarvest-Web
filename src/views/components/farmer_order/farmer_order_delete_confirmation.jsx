import { Button, Col, Row } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'

const FarmerOrderDeleteConfirmation = ({ product, close }) => {
  const { t } = useTranslation()
  return (
    <div>
      <text>
        Are you sure you want to delete the order for farmer <b>{product?.hsn}</b> ?
      </text>
      <Row align={"bottom"} justify={"end"} gutter={10} style={{ marginTop: "20px" }}>
        <Col>
          <Button className='save-button'>
            {t("ok")}
          </Button>
        </Col>
        <Col>
          <Button onClick={close} className='close-button'>
            {t("close")}
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default FarmerOrderDeleteConfirmation
