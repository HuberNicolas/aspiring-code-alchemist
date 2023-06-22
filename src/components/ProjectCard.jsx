import "./ProjcetCard.scss";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPython } from "@fortawesome/free-brands-svg-icons";

export default function ProjectCard(props) {
    const { name, description, skills, repoLink } = props;

    return (
        <Card sx={{
            maxWidth: 345,
            backgroundColor: '#009688'
        }}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <div className={"skillList"}>
                        <Typography variant="body2" color="text.secondary">
                            Skills
                        </Typography>
                        {skills.map((skill, index) => (
                            <FontAwesomeIcon key={index} icon={skill} />
                        ))}
                    </div>
                </CardContent>
                <CardActions>
                    <a href={repoLink} target="_blank" rel="noopener noreferrer">
                        <Button>Repository</Button>
                    </a>
                </CardActions>
            </CardActionArea>
        </Card>
    );
}
