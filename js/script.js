const trails = 50;
//let scheduled = null;
//let timeout;

function main() {
    document.addEventListener('mousemove', mouseTrail);
}

function mouseTrail(e) {
    const trail = document.createElement('div');
    const wrapper = document.querySelector('.wrapper');
    trail.classList.add('trail');
    trail.style.left = e.clientX + 'px';
    trail.style.top = e.clientY + 'px';
    wrapper.appendChild(trail);

    if(wrapper.childElementCount > trails) {
        wrapper.removeChild(wrapper.getElementsByTagName('div')[0]);
    }

    /* if (!scheduled) {
        setTimeout(() => {

            const trail = document.createElement('div');
            const wrapper = document.querySelector('.wrapper');
            trail.classList.add('trail');
            trail.style.left = e.clientX + 'px';
            trail.style.top = e.clientY + 'px';
            wrapper.appendChild(trail);

            if(wrapper.childElementCount > trails) {
                wrapper.removeChild(wrapper.getElementsByTagName('div')[0]);
            }

            scheduled = null;

        }, 250);
    } */

    /*clearTimeout(timeout);

    timeout = setTimeout(() => {
        const trail = document.createElement('div');
        const wrapper = document.querySelector('.wrapper');
        trail.classList.add('trail');
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        wrapper.appendChild(trail);

        if(wrapper.childElementCount > trails) {
            wrapper.removeChild(wrapper.getElementsByTagName('div')[0]);
        }

    }, 25);*/
}

document.addEventListener('DOMContentLoaded', main);