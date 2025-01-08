---
title: Bookmark Index
publish: true
headDescription:
headIcon:
quartzShowTitle: true
quartzShowSubtitle: true
quartzShowTOC: true
quartzShowExplorer: true
quartzShowBacklinks: true
quartzShowCitation: false
quartzShowFlex: false
quartzShowGraph: true
quartzSearch: false
internalRef:
---

<style>

    .gallery3 {
    display: flex; /* or grid, depending on your layout */
    flex-wrap: wrap; /* Ensures items wrap if necessary */
    gap: 1rem; /* Adjust spacing between items */
}

.gallery3 a {
    display: block; /* Ensures the link behaves like a block element */
    text-decoration: none;
    color: inherit;
    flex: 1; /* Ensures the link takes up the same space as a gallery item */
    min-width: 200px; /* Adjust as needed */
    box-sizing: border-box;
}
    .gallery3-item {
        box-sizing: border-box;
        width: 100%;
        height: 350px;
        max-height: 350px !important;
        padding: 0rem;
        background-color: var(--lightgray);
        border: 1px solid var(--dark);
        border-radius: 10px;
        overflow: hidden;
    }
    .gallery3-item:hover {
            background-color: var(--dark);
        > h2 {
            color: var(--lightgray);
        }
        > p {
            color: var(--lightgray);
        }
        > .gallery3-img-container img {
            transform: scale(1.1);
            transition: transform 0.3s ease-in-out;
        }
    }

    .gallery3-img-container {
        height: 150px;
        overflow: hidden;
        > img {
            width: 100%;
            object-fit: cover;
            transition: transform 0.3s ease-in-out;
        }
    }

    .gallery3 {
        &img {
            margin: 0rem !important;
            padding: 0rem !important;
        }
        & h2 {
            margin: 1rem;
            font-size: 1rem;
            justify-content: center;
            text-align: center;
            > a {
                display: none;
            }
        }
        & p {
            margin: 0rem 1rem 1rem 1rem;
            font-size: 0.8rem;
            line-height: 1.3rem;
            overflow-y: scroll;
        }
    }
</style>

<div class="gallery3">
    <a href="https://issues.org/limits-of-data-nguyen/" target="_blank" style="display: block; text-decoration: none; color: inherit;">
        <div class="gallery3-item">
            <div class="gallery3-img-container"> 
                <img src="https://issues.org/wp-content/uploads/2023/12/Datafinal3.jpeg" alt="The Limits of Data">
            </div>
            <h2>The Limits of Data</h2>
            <p>Policymakers want to make decisions based on clear data, but important factors are lost when we rely solely on data.</p>
        </div>
    </a>
</div>
