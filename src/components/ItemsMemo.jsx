import {memo} from 'react';
import {Item} from '../styles/carouselStyles'
import {Button, Project, ProjectTitle} from '../styles/projectsStyles';
import Image from 'next/image';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import {gradients} from '../consts/gradients';

function ItemsMemo({items, sizes, setIndexScroll, currentDot}){
    const { t } = useTranslation('common');
    const router = useRouter();
    const viewProject = ({target}) =>{
        const yPos = window.scrollY;
        router.push(`/projects/[project]` ,`/projects/${target.value}`).then(() => {
            window.scrollTo(0, 0);
            setIndexScroll({yPos, lastCurrentDot: currentDot.val, lastSavedDir: currentDot.lastForthDirection});
        });
    }
    return(
        <>
            {
                items.map(({name, route, description, icon}, i) =>
                    <Item key={`item.${i}`} sizes={sizes}>
                        <Project style={{backgroundImage: gradients[i]}}>
                            <div>
                                <ProjectTitle>
                                    <h2>{name}</h2>
                                    <div style={{width: '40px', height: '40px', marginLeft: '15px'}}>
                                        <Image src={icon} width={50} height={50}/>
                                    </div>
                                </ProjectTitle>
                                <p>{description.substr(0, 250)}<b>[...]</b></p>
                            </div>
                            <Button value={route} onClick={viewProject}>{t('Details')}</Button>
                        </Project>
                    </Item>
                )
            }
        </>
    )
}
export default memo(ItemsMemo);