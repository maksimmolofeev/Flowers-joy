import { Container } from 'shared/ui/Container/Container';
import cls from './BrieflyDelivery.module.scss';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface BrieflyDeliveryProps {
}

export const BrieflyDelivery: React.FC<BrieflyDeliveryProps> = (props) => {
    const URL = "https://1.downloader.disk.yandex.ru/preview/de6d4496a8f1514b25e75dc888a51cda23cfceb21e0e63f9b22cb57b60ac2c8f/inf/SLnao2EHjJ8r4UrdPo6GAVd5o8qMBJB0MypwFKiyn496EpQAG3wc0W-mESbW-T8CHXMbCe2TnA-_DFvKfFJntQ%3D%3D?uid=1438650916&filename=blush_by_yasya_1680774252563.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=1438650916&tknv=v2&size=1894x913"

    return (
        <div className={cls.BrieflyDelivery}>
            <Container>
                <div className={cls.img_block}>
                    <img className={cls.img} src={URL} alt="" />
                </div>
                <div className={cls.text}>
                    <p>Каждый букет мы собираем из самых свежих цветов, стильно упаковываем и бережно доставляем.</p>
                    <p>Доставка осуществляется в специальных  транспортировочных боксах в одноразовой вазочке с водой.</p>
                    <p>Наши цветы обрадуют вас неимоверной стойкостью и изумительным ароматом</p>
                    <div className={cls.button}>
                        <Button theme={ButtonTheme.OUTLINE}>
                            <AppLink
                                to={RoutePath.catalog}
                            >
                                Выбрать букет
                            </AppLink>
                        </Button>
                        <Button theme={ButtonTheme.OUTLINE}>
                            <AppLink
                                    to={RoutePath.delivery_info}
                                >
                                    Подробнее
                            </AppLink>
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
}